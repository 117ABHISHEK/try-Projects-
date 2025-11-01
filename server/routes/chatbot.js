const express = require("express")
const thalassemiaChatbot = require("../services/thalassemiaChatbotService")
const ChatSession = require("../models/ChatSession")
const { authMiddleware } = require("../middleware/auth")

const router = express.Router()

// POST /api/chatbot/message - Send message to chatbot and get response
router.post("/message", authMiddleware, async (req, res) => {
  try {
    const { message, sessionId } = req.body
    const userId = req.user._id

    if (!message || message.trim() === "") {
      return res.status(400).json({ message: "Message is required" })
    }

    // Process message with chatbot
    const chatbotResponse = thalassemiaChatbot.processMessage(message, userId)

    // Find or create chat session
    let session
    if (sessionId) {
      session = await ChatSession.findById(sessionId)
      if (!session || session.user.toString() !== userId.toString()) {
        session = null // Invalid session or not belonging to user
      }
    }

    if (!session) {
      // Create new session
      session = new ChatSession({
        user: userId,
        messages: [],
        sessionStart: new Date(),
      })
    }

    // Add messages to session
    session.messages.push(
      {
        sender: "user",
        message: message,
        timestamp: new Date(),
      },
      {
        sender: "bot",
        message: chatbotResponse.response,
        timestamp: new Date(),
      },
    )

    await session.save()

    res.json({
      botResponse: chatbotResponse.response,
      suggestions: chatbotResponse.suggestions,
      intent: chatbotResponse.intent,
      sessionId: session._id,
    })
  } catch (error) {
    console.error("Chatbot message error:", error)
    res.status(500).json({ message: "Error processing message", error: error.message })
  }
})

// GET /api/chatbot/history - Get chat history for current user
router.get("/history", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id
    const { sessionId, limit = 10 } = req.query

    let query = { user: userId }
    if (sessionId) {
      query._id = sessionId
    }

    const sessions = await ChatSession.find(query)
      .sort({ sessionStart: -1 })
      .limit(parseInt(limit))
      .select("messages sessionStart sessionEnd")

    res.json({ sessions })
  } catch (error) {
    console.error("Chatbot history error:", error)
    res.status(500).json({ message: "Error retrieving chat history", error: error.message })
  }
})

// GET /api/chatbot/session/:id - Get specific chat session
router.get("/session/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id
    const sessionId = req.params.id

    const session = await ChatSession.findOne({ _id: sessionId, user: userId })

    if (!session) {
      return res.status(404).json({ message: "Chat session not found" })
    }

    res.json({ session })
  } catch (error) {
    console.error("Chatbot session error:", error)
    res.status(500).json({ message: "Error retrieving chat session", error: error.message })
  }
})

// DELETE /api/chatbot/session/:id - Delete a chat session
router.delete("/session/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id
    const sessionId = req.params.id

    const session = await ChatSession.findOneAndDelete({ _id: sessionId, user: userId })

    if (!session) {
      return res.status(404).json({ message: "Chat session not found" })
    }

    res.json({ message: "Chat session deleted successfully" })
  } catch (error) {
    console.error("Chatbot delete error:", error)
    res.status(500).json({ message: "Error deleting chat session", error: error.message })
  }
})

module.exports = router

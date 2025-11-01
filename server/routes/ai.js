const express = require("express")
const axios = require("axios")
const DonorProfile = require("../models/DonorProfile")
const { authMiddleware } = require("../middleware/auth")

const router = express.Router()

// AI Service URL from environment variable
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || "http://localhost:5001"

// POST /api/ai/predict-donor - Get AI prediction for compatible donors
router.post("/predict-donor", authMiddleware, async (req, res) => {
  try {
    const { bloodType, location, urgency } = req.body

    // Validation
    if (!bloodType || !location || !location.city || !location.state) {
      return res.status(400).json({ message: "Blood type and location (city, state) are required" })
    }

    // Fetch all eligible donors from database
    const donors = await DonorProfile.find({
      bloodGroup: bloodType,
      "address.city": new RegExp(location.city, "i"),
      "address.state": new RegExp(location.state, "i"),
    })
      .populate("userId", "name email phone")
      .lean()

    if (donors.length === 0) {
      // No donors found, try broader search
      const stateDonors = await DonorProfile.find({
        bloodGroup: bloodType,
        "address.state": new RegExp(location.state, "i"),
      })
        .populate("userId", "name email phone")
        .lean()

      if (stateDonors.length === 0) {
        return res.json({
          predictions: [],
          message: "No donors found matching the criteria",
        })
      }
    }

    // Try to call AI service for predictions
    try {
      const aiResponse = await axios.post(
        `${AI_SERVICE_URL}/predict-donor`,
        {
          bloodType,
          location,
          urgency: urgency || "normal",
          donors: donors.map((d) => ({
            donorId: d._id,
            bloodType: d.bloodGroup,
            city: d.address.city,
            state: d.address.state,
            lastDonationDate: d.lastDonationDate,
            totalDonations: d.totalDonations || 0,
            availableForEmergency: d.availableForEmergency,
            nextEligibleDate: d.nextEligibleDate,
          })),
        },
        {
          timeout: 5000, // 5 second timeout
        },
      )

      // Combine AI predictions with full donor data
      const predictions = aiResponse.data.predictions || []
      const enrichedPredictions = predictions.map((pred) => {
        const donor = donors.find((d) => d._id.toString() === pred.donorId.toString())
        return {
          ...pred,
          donorInfo: {
            name: donor?.userId?.name,
            email: donor?.userId?.email,
            phone: donor?.userId?.phone,
            bloodGroup: donor?.bloodGroup,
            address: donor?.address,
            lastDonationDate: donor?.lastDonationDate,
            totalDonations: donor?.totalDonations,
            availableForEmergency: donor?.availableForEmergency,
          },
        }
      })

      return res.json({
        predictions: enrichedPredictions,
        source: "ai",
        message: "Donors ranked by AI compatibility score",
      })
    } catch (aiError) {
      // AI service unavailable, fallback to simple sorting
      console.warn("AI service unavailable, using fallback donor search:", aiError.message)

      // Fallback: Sort donors by eligibility and availability
      const sortedDonors = donors
        .filter((d) => {
          // Filter eligible donors (nextEligibleDate <= today or no last donation)
          if (!d.lastDonationDate) return true
          if (!d.nextEligibleDate) return true
          return new Date(d.nextEligibleDate) <= new Date()
        })
        .sort((a, b) => {
          // Sort by: 1) availableForEmergency, 2) totalDonations, 3) recent donation
          if (a.availableForEmergency !== b.availableForEmergency) {
            return b.availableForEmergency - a.availableForEmergency
          }
          if (a.totalDonations !== b.totalDonations) {
            return (b.totalDonations || 0) - (a.totalDonations || 0)
          }
          return 0
        })
        .slice(0, 10) // Top 10 donors

      const fallbackPredictions = sortedDonors.map((donor, index) => ({
        donorId: donor._id,
        compatibilityScore: 1 - index * 0.05, // Simple decreasing score
        donorInfo: {
          name: donor.userId.name,
          email: donor.userId.email,
          phone: donor.userId.phone,
          bloodGroup: donor.bloodGroup,
          address: donor.address,
          lastDonationDate: donor.lastDonationDate,
          totalDonations: donor.totalDonations,
          availableForEmergency: donor.availableForEmergency,
        },
        factors: {
          bloodTypeMatch: 1.0,
          locationProximity: donor.address.city.toLowerCase() === location.city.toLowerCase() ? 1.0 : 0.7,
          availability: donor.availableForEmergency ? 1.0 : 0.5,
          donationHistory: Math.min((donor.totalDonations || 0) / 10, 1.0),
        },
      }))

      return res.json({
        predictions: fallbackPredictions,
        source: "fallback",
        message: "AI service unavailable, using standard donor search",
      })
    }
  } catch (error) {
    console.error("AI predict-donor error:", error)
    res.status(500).json({ message: "Error predicting donors", error: error.message })
  }
})

// GET /api/ai/health - Check AI service health
router.get("/health", async (req, res) => {
  try {
    const response = await axios.get(`${AI_SERVICE_URL}/health`, { timeout: 2000 })
    res.json({
      aiService: "online",
      details: response.data,
    })
  } catch (error) {
    res.json({
      aiService: "offline",
      message: "AI service is not available",
    })
  }
})

module.exports = router

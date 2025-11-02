import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaComments } from 'react-icons/fa';
import api from '../utils/api';

const ChatbotPage = ({ isFloating = false }) => {
  const [isOpen, setIsOpen] = useState(!isFloating);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      message: 'Hello! I\'m ThalAI, your Thalassemia support assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      message: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await api.post('/chatbot/message', {
        message: inputMessage.trim(),
        sessionId
      });

      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        message: response.data.botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setSessionId(response.data.sessionId);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        message: 'Sorry, I\'m having trouble connecting. Please try again later.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFloating) {
    return (
      <div className="chatbot-thali">
        {!isOpen ? (
          <button
            className="chat-button"
            onClick={() => setIsOpen(true)}
            title="Chat with ThalAI"
          >
            <FaComments />
          </button>
        ) : (
          <div className="card shadow-lg" style={{ width: '350px', height: '500px' }}>
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <div>
                <strong><FaRobot className="me-2" />ThalAI</strong>
                <div className="small">Thalassemia Support Assistant</div>
              </div>
              <button
                className="btn btn-sm btn-link text-white p-0"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="card-body p-2" style={{ height: '400px', overflowY: 'auto' }}>
              <div className="chat-messages">
                {messages.map((msg) => (
                  <div key={msg.id} className={`mb-2 ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
                    <div className={`d-inline-block p-2 rounded-3 ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-light text-dark'
                    }`} style={{ maxWidth: '80%' }}>
                      <div className="small">{msg.message}</div>
                      <div className={`small ${msg.sender === 'user' ? 'text-white-50' : 'text-muted'} mt-1`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-start">
                    <div className="bg-light text-dark d-inline-block p-2 rounded-3">
                      <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                      <span>Typing...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="card-footer p-2">
              <form onSubmit={sendMessage} className="d-flex gap-1">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Ask about Thalassemia..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  disabled={isLoading || !inputMessage.trim()}
                >
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full page chatbot
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card-thali">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">
                <FaRobot className="me-2" />
                ThalAI Chatbot
              </h4>
              <p className="mb-0">Your Thalassemia Support Assistant</p>
            </div>
            <div className="card-body p-3" style={{ height: '500px', overflowY: 'auto' }}>
              <div className="chat-messages">
                {messages.map((msg) => (
                  <div key={msg.id} className={`mb-3 ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
                    <div className={`d-inline-block p-3 rounded-4 ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-light text-dark'
                    }`} style={{ maxWidth: '70%' }}>
                      <div className="fw-bold mb-1">
                        {msg.sender === 'user' ? 'You' : 'ThalAI'}
                      </div>
                      <div>{msg.message}</div>
                      <div className={`small ${msg.sender === 'user' ? 'text-white-50' : 'text-muted'} mt-2`}>
                        {msg.timestamp.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-start">
                    <div className="bg-light text-dark d-inline-block p-3 rounded-4">
                      <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                      <span>ThalAI is thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="card-footer p-3">
              <form onSubmit={sendMessage} className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control form-control-thali"
                  placeholder="Ask about Thalassemia, treatment, diet..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="btn btn-thali-primary"
                  disabled={isLoading || !inputMessage.trim()}
                >
                  <FaPaperPlane className="me-2" />
                  Send
                </button>
              </form>
              <div className="text-center mt-2">
                <small className="text-muted">
                  💡 Try asking: "What is Thalassemia?", "Blood transfusion schedule", "Diet recommendations"
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
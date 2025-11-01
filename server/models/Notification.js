const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["sms", "email", "in-app"],
      required: true,
    },
    category: {
      type: String,
      enum: ["appointment", "blood-request", "reminder", "alert"],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },
    sentAt: {
      type: Date,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed, // For storing additional info like appointmentId, requestId
    },
  },
  {
    timestamps: true,
  },
)

// Index for efficient querying
notificationSchema.index({ user: 1, createdAt: -1 })
notificationSchema.index({ status: 1 })

module.exports = mongoose.model("Notification", notificationSchema)

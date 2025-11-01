const mongoose = require("mongoose")

const donorProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    lastDonationDate: {
      type: Date,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },
    availableForEmergency: {
      type: Boolean,
      default: true,
    },
    donationHistory: [
      {
        patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        date: { type: Date, default: Date.now },
        status: {
          type: String,
          enum: ["completed", "scheduled", "cancelled"],
          default: "completed",
        },
        units: { type: Number, default: 1 },
      },
    ],
    nextEligibleDate: {
      type: Date,
    },
    totalDonations: {
      type: Number,
      default: 0,
    },
    notificationPreferences: {
      sms: { type: Boolean, default: true },
      email: { type: Boolean, default: true },
    },
  },
  {
    timestamps: true,
  },
)

// Virtual to calculate next eligible date based on last donation
donorProfileSchema.pre("save", function (next) {
  // Calculate totalDonations from donationHistory
  this.totalDonations = this.donationHistory.filter(
    (donation) => donation.status === "completed"
  ).length

  // Calculate nextEligibleDate (56 days after last donation)
  if (this.lastDonationDate) {
    const eligibleDate = new Date(this.lastDonationDate)
    eligibleDate.setDate(eligibleDate.getDate() + 56)
    this.nextEligibleDate = eligibleDate
  } else {
    this.nextEligibleDate = new Date() // Eligible now if never donated
  }

  next()
})

module.exports = mongoose.model("DonorProfile", donorProfileSchema)

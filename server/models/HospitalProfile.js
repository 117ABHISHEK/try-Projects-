const mongoose = require("mongoose")

const hospitalProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    hospitalName: {
      type: String,
      required: true,
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    contactPerson: {
      name: String,
      designation: String,
      phone: String,
      email: String,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },
    bloodStock: [
      {
        bloodGroup: {
          type: String,
          enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        },
        units: { type: Number, default: 0 },
        lastUpdated: { type: Date, default: Date.now },
      },
    ],
    facilities: [String], // ["ICU", "Emergency", "Blood Bank", etc.]
    donationCamps: [
      {
        date: Date,
        location: String,
        description: String,
        registeredDonors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      },
    ],
    operatingHours: {
      openTime: { type: String, default: "08:00" }, // Format: "HH:MM"
      closeTime: { type: String, default: "18:00" }, // Format: "HH:MM"
      emergencyAvailable: { type: Boolean, default: true }, // 24/7 for emergencies
    },
    bloodBankAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model("HospitalProfile", hospitalProfileSchema)

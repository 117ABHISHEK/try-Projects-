const mongoose = require("mongoose")

const patientProfileSchema = new mongoose.Schema(
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
    medicalHistory: {
      type: String,
      default: "",
    },
    currentMedication: {
      type: String,
      default: "",
    },
    emergencyContact: {
      name: String,
      phone: String,
      relationship: String,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },
    healthLogs: [
      {
        hemoglobin: Number,
        ferritinLevel: Number,
        date: { type: Date, default: Date.now },
        notes: String,
        doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    nextTransfusionDate: {
      type: Date,
    },
    transfusionFrequency: {
      type: Number, // Days between transfusions
      default: 21, // Default 3 weeks
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model("PatientProfile", patientProfileSchema)

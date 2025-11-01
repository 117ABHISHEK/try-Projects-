const express = require("express")
const Appointment = require("../models/Appointment")
const { authMiddleware, roleMiddleware } = require("../middleware/auth")

const router = express.Router()

// POST /api/appointments - Create new appointment
router.post("/", authMiddleware, async (req, res) => {
  try {
    const {
      patient,
      doctor,
      counselor,
      hospital,
      appointmentDate,
      startTime,
      endTime,
      appointmentType,
      sessionType,
      reason,
      notes,
    } = req.body

    // Validation
    if (!appointmentDate || !startTime || !endTime || !appointmentType || !reason) {
      return res.status(400).json({ message: "Required fields missing" })
    }

    // Check if appointmentDate is in the future
    const apptDate = new Date(appointmentDate)
    if (apptDate < new Date()) {
      return res.status(400).json({ message: "Appointment date must be in the future" })
    }

    // Auto-fill patient if user is patient role and patient not provided
    const patientId = patient || (req.user.role === "patient" ? req.user._id : null)

    if (!patientId) {
      return res.status(400).json({ message: "Patient is required" })
    }

    // Check for scheduling conflicts (same doctor/hospital at same time)
    const conflictQuery = {
      appointmentDate: apptDate,
      startTime: startTime,
      status: { $ne: "cancelled" },
    }

    if (doctor) {
      conflictQuery.doctor = doctor
      const conflict = await Appointment.findOne(conflictQuery)
      if (conflict) {
        return res.status(400).json({ message: "Scheduling conflict: Doctor not available at this time" })
      }
    }

    if (hospital) {
      conflictQuery.hospital = hospital
      delete conflictQuery.doctor
      const conflict = await Appointment.findOne(conflictQuery)
      if (conflict) {
        return res.status(400).json({ message: "Scheduling conflict: Hospital slot not available" })
      }
    }

    // Create appointment
    const appointment = new Appointment({
      patient: patientId,
      doctor,
      counselor,
      hospital,
      appointmentDate: apptDate,
      startTime,
      endTime,
      appointmentType,
      sessionType: sessionType || "in-person",
      reason,
      notes: notes || {},
    })

    await appointment.save()

    // Populate for response
    await appointment.populate("patient doctor counselor hospital")

    res.status(201).json({
      message: "Appointment created successfully",
      appointment,
    })
  } catch (error) {
    console.error("Create appointment error:", error)
    res.status(500).json({ message: "Error creating appointment", error: error.message })
  }
})

// GET /api/appointments - Get appointments (filtered by role)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const { patientId, doctorId, hospitalId, status, startDate, endDate } = req.query
    const userId = req.user._id
    const userRole = req.user.role

    // Build query based on role
    let query = {}

    if (userRole === "patient") {
      query.patient = userId
    } else if (userRole === "doctor") {
      query.doctor = userId
    } else if (userRole === "hospital") {
      query.hospital = userId
    } else if (userRole === "admin") {
      // Admin can see all, apply filters if provided
      if (patientId) query.patient = patientId
      if (doctorId) query.doctor = doctorId
      if (hospitalId) query.hospital = hospitalId
    } else {
      // Other roles: show appointments where they're involved
      query.$or = [{ patient: userId }, { doctor: userId }, { hospital: userId }]
    }

    // Apply additional filters
    if (status) {
      query.status = status
    }

    if (startDate || endDate) {
      query.appointmentDate = {}
      if (startDate) query.appointmentDate.$gte = new Date(startDate)
      if (endDate) query.appointmentDate.$lte = new Date(endDate)
    }

    const appointments = await Appointment.find(query)
      .populate("patient", "name email phone")
      .populate("doctor", "name email phone")
      .populate("counselor", "name email phone")
      .populate("hospital", "name email phone")
      .sort({ appointmentDate: 1, startTime: 1 })

    res.json({ appointments })
  } catch (error) {
    console.error("Get appointments error:", error)
    res.status(500).json({ message: "Error retrieving appointments", error: error.message })
  }
})

// GET /api/appointments/:id - Get single appointment
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const appointmentId = req.params.id
    const userId = req.user._id
    const userRole = req.user.role

    const appointment = await Appointment.findById(appointmentId)
      .populate("patient", "name email phone")
      .populate("doctor", "name email phone")
      .populate("counselor", "name email phone")
      .populate("hospital", "name email phone")

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" })
    }

    // Check authorization
    const isInvolved =
      appointment.patient?.toString() === userId.toString() ||
      appointment.doctor?.toString() === userId.toString() ||
      appointment.counselor?.toString() === userId.toString() ||
      appointment.hospital?.toString() === userId.toString() ||
      userRole === "admin"

    if (!isInvolved) {
      return res.status(403).json({ message: "Not authorized to view this appointment" })
    }

    res.json({ appointment })
  } catch (error) {
    console.error("Get appointment error:", error)
    res.status(500).json({ message: "Error retrieving appointment", error: error.message })
  }
})

// PUT /api/appointments/:id - Update appointment
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const appointmentId = req.params.id
    const userId = req.user._id
    const updateData = req.body

    const appointment = await Appointment.findById(appointmentId)

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" })
    }

    // Check authorization (patient or doctor/counselor involved)
    const isAuthorized =
      appointment.patient.toString() === userId.toString() ||
      appointment.doctor?.toString() === userId.toString() ||
      appointment.counselor?.toString() === userId.toString() ||
      req.user.role === "admin"

    if (!isAuthorized) {
      return res.status(403).json({ message: "Not authorized to update this appointment" })
    }

    // Update allowed fields
    const allowedUpdates = ["appointmentDate", "startTime", "endTime", "status", "notes", "sessionType", "reason"]

    Object.keys(updateData).forEach((key) => {
      if (allowedUpdates.includes(key)) {
        if (key === "notes") {
          appointment.notes = { ...appointment.notes, ...updateData.notes }
        } else {
          appointment[key] = updateData[key]
        }
      }
    })

    await appointment.save()
    await appointment.populate("patient doctor counselor hospital")

    res.json({
      message: "Appointment updated successfully",
      appointment,
    })
  } catch (error) {
    console.error("Update appointment error:", error)
    res.status(500).json({ message: "Error updating appointment", error: error.message })
  }
})

// DELETE /api/appointments/:id - Cancel appointment (soft delete)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const appointmentId = req.params.id
    const userId = req.user._id

    const appointment = await Appointment.findById(appointmentId)

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" })
    }

    // Check authorization
    const isAuthorized =
      appointment.patient.toString() === userId.toString() ||
      appointment.doctor?.toString() === userId.toString() ||
      appointment.counselor?.toString() === userId.toString() ||
      req.user.role === "admin"

    if (!isAuthorized) {
      return res.status(403).json({ message: "Not authorized to cancel this appointment" })
    }

    // Soft delete: set status to cancelled
    appointment.status = "cancelled"
    await appointment.save()

    res.json({ message: "Appointment cancelled successfully" })
  } catch (error) {
    console.error("Delete appointment error:", error)
    res.status(500).json({ message: "Error cancelling appointment", error: error.message })
  }
})

module.exports = router

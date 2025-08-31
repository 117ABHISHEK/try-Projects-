"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import axios from "axios"

const Dashboard = () => {
  const { user } = useAuth()
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchDashboardData()
  }, [user])

  const fetchDashboardData = async () => {
    try {
      const endpoint = `/api/${user.role}/dashboard`
      const response = await axios.get(endpoint)
      setDashboardData(response.data.data)
    } catch (error) {
      setError("Failed to load dashboard data")
      console.error("Dashboard error:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>
      </div>
    )
  }

  const renderPatientDashboard = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Health Tracking</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-charcoal-grey">Last Checkup</p>
            <p className="font-medium">{dashboardData.healthTracking.lastCheckup}</p>
          </div>
          <div>
            <p className="text-sm text-charcoal-grey">Next Appointment</p>
            <p className="font-medium">{dashboardData.healthTracking.nextAppointment}</p>
          </div>
          <div>
            <p className="text-sm text-charcoal-grey">Blood Type</p>
            <p className="font-medium">{dashboardData.healthTracking.bloodType}</p>
          </div>
          <div>
            <p className="text-sm text-charcoal-grey">Status</p>
            <p className="font-medium text-sage-green">{dashboardData.healthTracking.status}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Available Donors</h3>
        <div className="space-y-3">
          {dashboardData.donorRequests.map((request) => (
            <div key={request.id} className="border rounded p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Blood Type: {request.bloodType}</p>
                  <p className="text-sm text-charcoal-grey">{request.location}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    request.urgency === "High" ? "bg-deep-red/20 text-deep-red" : "bg-soft-gold/20 text-soft-gold"
                  }`}
                >
                  {request.urgency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDonorDashboard = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Donation History</h3>
        <div className="space-y-3">
          {dashboardData.donationHistory.map((donation, index) => (
            <div key={index} className="border rounded p-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{donation.location}</p>
                  <p className="text-sm text-charcoal-grey">{donation.date}</p>
                </div>
                <p className="font-medium">{donation.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Blood Requests</h3>
        <div className="space-y-3">
          {dashboardData.bloodRequests.map((request) => (
            <div key={request.id} className="border rounded p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Blood Type: {request.bloodType}</p>
                  <p className="text-sm text-charcoal-grey">{request.hospital}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    request.urgency === "Critical"
                      ? "bg-deep-red/20 text-deep-red"
                      : request.urgency === "High"
                        ? "bg-soft-gold/20 text-soft-gold"
                        : "bg-soft-gold/20 text-soft-gold"
                  }`}
                >
                  {request.urgency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDoctorDashboard = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Patient Records</h3>
        <div className="space-y-3">
          {dashboardData.patientRecords.map((patient) => (
            <div key={patient.id} className="border rounded p-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-charcoal-grey">{patient.condition}</p>
                </div>
                <p className="text-sm text-charcoal-grey">Last visit: {patient.lastVisit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
        <div className="space-y-3">
          {dashboardData.appointments.map((appointment) => (
            <div key={appointment.id} className="border rounded p-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{appointment.patient}</p>
                  <p className="text-sm text-charcoal-grey">{appointment.date}</p>
                </div>
                <p className="font-medium">{appointment.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAdminDashboard = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-serenity-blue">{dashboardData.stats.totalUsers}</p>
          <p className="text-sm text-charcoal-grey">Total Users</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-sage-green">{dashboardData.stats.patients}</p>
          <p className="text-sm text-charcoal-grey">Patients</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-deep-red">{dashboardData.stats.donors}</p>
          <p className="text-sm text-charcoal-grey">Donors</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-serenity-blue">{dashboardData.stats.doctors}</p>
          <p className="text-sm text-charcoal-grey">Doctors</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-charcoal-grey">{dashboardData.stats.admins}</p>
          <p className="text-sm text-charcoal-grey">Admins</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">All Users</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-body-light-grey">
            <thead className="bg-body-light-grey">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-grey uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-grey uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-grey uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-grey uppercase tracking-wider">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-body-light-grey">
              {dashboardData.users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal-grey">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal-grey">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.role === "admin"
                          ? "bg-serenity-blue/20 text-serenity-blue"
                          : user.role === "doctor"
                            ? "bg-serenity-blue/20 text-serenity-blue"
                            : user.role === "donor"
                              ? "bg-deep-red/20 text-deep-red"
                              : "bg-sage-green/20 text-sage-green"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal-grey">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderDashboard = () => {
    switch (user.role) {
      case "patient":
        return renderPatientDashboard()
      case "donor":
        return renderDonorDashboard()
      case "doctor":
        return renderDoctorDashboard()
      case "admin":
        return renderAdminDashboard()
      default:
        return <div>Invalid role</div>
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-charcoal-grey">
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Dashboard
        </h1>
        <p className="text-charcoal-grey">Welcome back, {user.name}!</p>
      </div>

      {renderDashboard()}
    </div>
  )
}

export default Dashboard

const fs = require("fs")
const path = require("path")

// Load mock data from sample.json
const sampleDataPath = path.join(__dirname, "../../public-api-integration/sample.json")
let mockData = { bloodBanks: [], donors: [] }

try {
  const data = fs.readFileSync(sampleDataPath, "utf8")
  mockData = JSON.parse(data)
} catch (error) {
  console.warn("Warning: Could not load e-RaktKosh mock data from sample.json")
  console.warn("Using empty mock data. Error:", error.message)
}

/**
 * e-RaktKosh API Mock Service
 * Provides mock/stub implementation of e-RaktKosh government blood bank API
 * In production, this would integrate with the real e-RaktKosh API
 */

/**
 * Search blood banks by location and blood type
 * @param {string} city - City name
 * @param {string} state - State name
 * @param {string} bloodType - Blood type (optional)
 * @returns {Array} Array of blood bank objects
 */
const searchBloodBanks = (city, state, bloodType = null) => {
  try {
    let results = mockData.bloodBanks || []

    // Filter by city (case-insensitive)
    if (city) {
      results = results.filter((bank) => bank.address.city.toLowerCase() === city.toLowerCase())
    }

    // Filter by state (case-insensitive)
    if (state) {
      results = results.filter((bank) => bank.address.state.toLowerCase() === state.toLowerCase())
    }

    // Filter by blood type availability
    if (bloodType) {
      results = results.filter((bank) => {
        const availability = bank.availability[bloodType]
        return availability && availability > 0
      })
    }

    return results
  } catch (error) {
    console.error("Error in searchBloodBanks:", error.message)
    return []
  }
}

/**
 * Search donors by blood type and location
 * @param {string} bloodType - Blood type (required)
 * @param {string} city - City name (required)
 * @param {string} state - State name (required)
 * @returns {Array} Array of anonymized donor objects
 */
const searchDonors = (bloodType, city, state) => {
  try {
    let results = mockData.donors || []

    // Filter by blood type
    if (bloodType) {
      results = results.filter((donor) => donor.bloodType === bloodType)
    }

    // Filter by city (case-insensitive)
    if (city) {
      results = results.filter((donor) => donor.city.toLowerCase() === city.toLowerCase())
    }

    // Filter by state (case-insensitive)
    if (state) {
      results = results.filter((donor) => donor.state.toLowerCase() === state.toLowerCase())
    }

    // Return anonymized donor info (no personal contact info for privacy)
    return results.map((donor) => ({
      donorId: donor.donorId,
      bloodType: donor.bloodType,
      city: donor.city,
      state: donor.state,
      lastDonationDate: donor.lastDonationDate,
      availableForEmergency: donor.availableForEmergency,
      source: "e-RaktKosh",
    }))
  } catch (error) {
    console.error("Error in searchDonors:", error.message)
    return []
  }
}

/**
 * Get blood bank details by ID
 * @param {string} id - Blood bank ID
 * @returns {Object|null} Blood bank object or null if not found
 */
const getBloodBankById = (id) => {
  try {
    const bloodBank = mockData.bloodBanks.find((bank) => bank.id === id)
    return bloodBank || null
  } catch (error) {
    console.error("Error in getBloodBankById:", error.message)
    return null
  }
}

/**
 * Get all available blood banks
 * @returns {Array} Array of all blood banks
 */
const getAllBloodBanks = () => {
  try {
    return mockData.bloodBanks || []
  } catch (error) {
    console.error("Error in getAllBloodBanks:", error.message)
    return []
  }
}

/**
 * Check blood availability at a specific blood bank
 * @param {string} bankId - Blood bank ID
 * @param {string} bloodType - Blood type
 * @returns {Object} Availability info
 */
const checkBloodAvailability = (bankId, bloodType) => {
  try {
    const bloodBank = getBloodBankById(bankId)

    if (!bloodBank) {
      return {
        available: false,
        units: 0,
        message: "Blood bank not found",
      }
    }

    const units = bloodBank.availability[bloodType] || 0

    return {
      available: units > 0,
      units: units,
      bloodBank: {
        id: bloodBank.id,
        name: bloodBank.name,
        phone: bloodBank.phone,
        address: bloodBank.address,
      },
      message: units > 0 ? `${units} units available` : "Not available",
    }
  } catch (error) {
    console.error("Error in checkBloodAvailability:", error.message)
    return {
      available: false,
      units: 0,
      message: "Error checking availability",
    }
  }
}

/**
 * Get nearby blood banks based on city
 * @param {string} city - City name
 * @param {number} limit - Max number of results (default: 5)
 * @returns {Array} Array of nearby blood banks
 */
const getNearbyBloodBanks = (city, limit = 5) => {
  try {
    const results = searchBloodBanks(city, null, null)
    return results.slice(0, limit)
  } catch (error) {
    console.error("Error in getNearbyBloodBanks:", error.message)
    return []
  }
}

module.exports = {
  searchBloodBanks,
  searchDonors,
  getBloodBankById,
  getAllBloodBanks,
  checkBloodAvailability,
  getNearbyBloodBanks,
}

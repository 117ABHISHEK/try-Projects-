import React, { useState, useEffect } from 'react';

const PatientPersonalDetails = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    contactNumber: '',
    emailAddress: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressPincode: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    maritalStatus: '',
    allergies: '',
    chronicIllness: '',
    primaryDoctor: '',
    insuranceProvider: '',
    policyNumber: '',
    idProofNumber: '',
  });

  const [isEditing, setIsEditing] = useState(true); // Start in edit mode

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('patientPersonalDetails'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    localStorage.setItem('patientPersonalDetails', JSON.stringify(formData));
    // Here you would typically send the data to a backend API
    setIsEditing(false); // Switch to view mode after submission
  };

  const handleEdit = () => {
    setIsEditing(true); // Switch to edit mode
  };

  const genderOptions = ['Male', 'Female', 'Other'];
  const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const maritalStatusOptions = ['Single', 'Married', 'Other'];

  const renderField = (label, value, name, type = "text", options = [], required = true) => (
    <div className="col-span-1">
      <label className="block text-sm font-medium text-white">{label}</label>
      {isEditing ? (
        type === "select" ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5d9cec] focus:border-[#5d9cec] sm:text-sm bg-white"
            required={required}
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={`Enter your ${label.toLowerCase()}`}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5d9cec] focus:border-[#5d9cec] sm:text-sm"
            required={required}
            rows="3"
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={`Enter your ${label.toLowerCase()}`}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5d9cec] focus:border-[#5d9cec] sm:text-sm"
            required={required}
          />
        )
      ) : (
        <p className="mt-1 text-white text-base">{value || 'N/A'}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-[#0f1b2b] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Patient Personal Details</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderField("Full Name", formData.fullName, "fullName")}
          {renderField("Date of Birth", formData.dateOfBirth, "dateOfBirth", "date")}
          {renderField("Gender", formData.gender, "gender", "select", genderOptions)}
          {renderField("Blood Group", formData.bloodGroup, "bloodGroup", "select", bloodGroupOptions)}
          {renderField("Contact Number", formData.contactNumber, "contactNumber", "tel")}
          {renderField("Email Address", formData.emailAddress, "emailAddress", "email")}

          <fieldset className="col-span-full border border-gray-300 rounded-md p-4 mb-6">
            <legend className="text-lg font-semibold text-white px-2">Address</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {renderField("Street", formData.addressStreet, "addressStreet")}
              {renderField("City", formData.addressCity, "addressCity")}
              {renderField("State", formData.addressState, "addressState")}
              {renderField("Pincode", formData.addressPincode, "addressPincode")}
            </div>
          </fieldset>

          {renderField("Emergency Contact Name", formData.emergencyContactName, "emergencyContactName")}
          {renderField("Emergency Contact Number", formData.emergencyContactNumber, "emergencyContactNumber", "tel")}
          {renderField("Marital Status", formData.maritalStatus, "maritalStatus", "select", maritalStatusOptions)}
          {renderField("Allergies (if any)", formData.allergies, "allergies", "textarea", [], false)}
          {renderField("Chronic Illness / Medical Conditions", formData.chronicIllness, "chronicIllness", "textarea", [], false)}
          {renderField("Primary Doctor / Physician Name", formData.primaryDoctor, "primaryDoctor")}
          {renderField("Health Insurance Provider", formData.insuranceProvider, "insuranceProvider", "text", [], false)}
          {renderField("Policy Number", formData.policyNumber, "policyNumber", "text", [], false)}
          {renderField("Aadhar / ID Proof Number", formData.idProofNumber, "idProofNumber")}

          {isEditing ? (
            <button
              type="submit"
              className="col-span-full w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#2ecc71] hover:bg-[#27ae60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              onClick={handleEdit}
              className="col-span-full w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#5d9cec] hover:bg-[#4a8cdb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5d9cec]"
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default PatientPersonalDetails;

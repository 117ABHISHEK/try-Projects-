import React, { useState } from 'react';

const DonorPersonalDetails = () => {
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
    occupation: '',
    idProofNumber: '',
  });

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
    // Here you would typically send the data to a backend API
    alert('Form submitted! Check console for data.');
  };

  const genderOptions = ['Male', 'Female', 'Other'];
  const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Donor Personal Details</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="fullName" style={styles.label}>Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="dateOfBirth" style={styles.label}>Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="gender" style={styles.label}>Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select Gender</option>
            {genderOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="bloodGroup" style={styles.label}>Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select Blood Group</option>
            {bloodGroupOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="contactNumber" style={styles.label}>Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="e.g., 123-456-7890"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="emailAddress" style={styles.label}>Email Address</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter your email"
            style={styles.input}
            required
          />
        </div>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Address</legend>
          <div style={styles.formGroup}>
            <label htmlFor="addressStreet" style={styles.label}>Street</label>
            <input
              type="text"
              id="addressStreet"
              name="addressStreet"
              value={formData.addressStreet}
              onChange={handleChange}
              placeholder="Street Address"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="addressCity" style={styles.label}>City</label>
            <input
              type="text"
              id="addressCity"
              name="addressCity"
              value={formData.addressCity}
              onChange={handleChange}
              placeholder="City"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="addressState" style={styles.label}>State</label>
            <input
              type="text"
              id="addressState"
              name="addressState"
              value={formData.addressState}
              onChange={handleChange}
              placeholder="State"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="addressPincode" style={styles.label}>Pincode</label>
            <input
              type="text"
              id="addressPincode"
              name="addressPincode"
              value={formData.addressPincode}
              onChange={handleChange}
              placeholder="Pincode"
              style={styles.input}
              required
            />
          </div>
        </fieldset>

        <div style={styles.formGroup}>
          <label htmlFor="emergencyContactName" style={styles.label}>Emergency Contact Person Name</label>
          <input
            type="text"
            id="emergencyContactName"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            placeholder="Emergency contact name"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="emergencyContactNumber" style={styles.label}>Emergency Contact Number</label>
          <input
            type="tel"
            id="emergencyContactNumber"
            name="emergencyContactNumber"
            value={formData.emergencyContactNumber}
            onChange={handleChange}
            placeholder="Emergency contact number"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="occupation" style={styles.label}>Occupation</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Your occupation"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="idProofNumber" style={styles.label}>Aadhar / ID Proof Number</label>
          <input
            type="text"
            id="idProofNumber"
            name="idProofNumber"
            value={formData.idProofNumber}
            onChange={handleChange}
            placeholder="Your ID proof number"
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
    backgroundColor: '#fff',
  },
  fieldset: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '20px 0',
  },
  legend: {
    fontWeight: 'bold',
    color: '#333',
    padding: '0 10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
  // Add hover effect for button if needed
  // button:hover: {
  //   backgroundColor: '#0056b3',
  // },
};

export default DonorPersonalDetails;

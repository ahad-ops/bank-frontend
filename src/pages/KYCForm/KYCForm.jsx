import React, { useState } from "react";
import "./KYCForm.css"; // This line imports the CSS file we'll create for styles.

const KYCForm = () => {
  // useState is a React hook that lets us add state (data) to our component.
  // Here, we initialize a state object called formData with all the fields we need.
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    accountNumber: "",
    cifNumber: "",
    dob: "",
    residentialStatus: "",
    panNumber: "",
    currentAddress: "",
    aadharNumber: "",
    localAddress: "",
    phoneNumber: "",
    landline: "",
    email: "",
    sameAsCurrent: false,
    passportPhoto: null,
    aadharCard: null,
    panCard: null,
    passport: null,
  });

  // This function updates the state when the user types in a field.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // This function handles file uploads.
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // This function will be called when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading.
    console.log(formData); // For now, we simply log the form data.
    // Later, you could send this data to a server.
  };

  // The return statement defines the HTML structure (JSX) of the form.
  return (
    <div className="kyc-form-container">
      <h1>KYC Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Each form field is wrapped in a div for organization. */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>CIF Number:</label>
          <input
            type="text"
            name="cifNumber"
            value={formData.cifNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Residential Status:</label>
          <select
            name="residentialStatus"
            value={formData.residentialStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="resident_individual">Resident Individual</option>
            <option value="non_resident_indian">Non Resident Indian</option>
            <option value="foreign_national">Foreign National</option>
            <option value="person_of_indian_origin">Person of Indian Origin</option>
          </select>
        </div>

        <div>
          <label>PAN Number:</label>
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Current Address:</label>
          <textarea
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Aadhaar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="sameAsCurrent"
              checked={formData.sameAsCurrent}
              onChange={handleChange}
            />
            Local Address same as Current Address
          </label>
        </div>

        <div>
          <label>Local Address:</label>
          <textarea
            name="localAddress"
            value={
              formData.sameAsCurrent
                ? formData.currentAddress
                : formData.localAddress
            }
            onChange={handleChange}
            required={!formData.sameAsCurrent}
            disabled={formData.sameAsCurrent}
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Landline:</label>
          <input
            type="tel"
            name="landline"
            value={formData.landline}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Upload Passport Size Photo:</label>
          <input
            type="file"
            name="passportPhoto"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>

        <div>
          <label>Upload Aadhaar Card:</label>
          <input
            type="file"
            name="aadharCard"
            onChange={handleFileChange}
            accept="image/*,application/pdf"
            required
          />
        </div>

        <div>
          <label>Upload PAN Card:</label>
          <input
            type="file"
            name="panCard"
            onChange={handleFileChange}
            accept="image/*,application/pdf"
            required
          />
        </div>

        <div>
          <label>Upload Passport:</label>
          <input
            type="file"
            name="passport"
            onChange={handleFileChange}
            accept="image/*,application/pdf"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default KYCForm;

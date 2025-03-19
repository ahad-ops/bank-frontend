import React, { useState } from "react";
import "./KYCForm.css";

const KYCForm = () => {
  // State for text/select fields
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
    sameAsCurrent: false,
    phoneNumber: "",
    landline: "",
    email: "",
  });

  // State for file uploads (3 required document fields)
  const [files, setFiles] = useState({
    aadhaarCard: null,
    panCard: null,
    passport: null,
  });

  const [error, setError] = useState("");
  const [uploadResult, setUploadResult] = useState(null);

  // Handle text and select input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      const updated = {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
      // If "sameAsCurrent" is checked, copy currentAddress into localAddress.
      if (name === "sameAsCurrent" && checked) {
        updated.localAddress = prevData.currentAddress;
      }
      return updated;
    });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: selectedFiles[0],
    }));
  };

  // Validate that at least 2 of the 3 document files have been uploaded.
  const validateFiles = () => {
    let count = 0;
    if (files.aadhaarCard) count++;
    if (files.panCard) count++;
    if (files.passport) count++;
    return count >= 2;
  };

  // Submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUploadResult(null);

    // List of mandatory text fields (excluding email and landline)
    const mandatoryFields = [
      "name",
      "fatherName",
      "accountNumber",
      "cifNumber",
      "dob",
      "residentialStatus",
      "panNumber",
      "currentAddress",
      "aadharNumber",
      "localAddress",
      "phoneNumber",
    ];

    // Validate that all mandatory text fields are filled.
    for (let field of mandatoryFields) {
      if (!formData[field]) {
        setError("Please fill all mandatory fields marked with *.");
        return;
      }
    }

    // Validate file uploads
    if (!validateFiles()) {
      setError("Please upload at least 2 documents (Aadhaar Card, PAN Card, Passport).");
      return;
    }

    // Prepare form data including files
    const submissionData = new FormData();
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }
    submissionData.append("aadhaarCard", files.aadhaarCard);
    submissionData.append("panCard", files.panCard);
    submissionData.append("passport", files.passport);

    try {
      // Make a POST request to your backend endpoint
      const response = await fetch("http://127.0.0.1:5000/upload_kyc_documents", {
        method: "POST",
        body: submissionData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit KYC form.");
      }
      const data = await response.json();
      setUploadResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="kyc-form-container">
      <h1>KYC Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Text Fields */}
        <div className="form-group">
          <label>
            Name <span className="required">*</span>
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>
            Father's Name <span className="required">*</span>
          </label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>
            Account Number <span className="required">*</span>
          </label>
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>
            CIF Number <span className="required">*</span>
          </label>
          <input type="text" name="cifNumber" value={formData.cifNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>
            Date of Birth <span className="required">*</span>
          </label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>
            Residential Status <span className="required">*</span>
          </label>
          <select name="residentialStatus" value={formData.residentialStatus} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="resident_individual">Resident Individual</option>
            <option value="non_resident_indian">Non Resident Indian</option>
            <option value="foreign_national">Foreign National</option>
            <option value="person_of_indian_origin">Person of Indian Origin</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            PAN Number <span className="required">*</span>
          </label>
          <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>
            Current Address <span className="required">*</span>
          </label>
          <textarea name="currentAddress" value={formData.currentAddress} onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <label>
            Aadhaar Number <span className="required">*</span>
          </label>
          <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>
            Local Address <span className="required">*</span>
          </label>
          <textarea name="localAddress" value={formData.localAddress} onChange={handleChange} required></textarea>
          <label className="checkbox-label">
            <input type="checkbox" name="sameAsCurrent" checked={formData.sameAsCurrent} onChange={handleChange} />
            Same as Current Address
          </label>
        </div>

        <div className="form-group">
          <label>
            Phone Number <span className="required">*</span>
          </label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Landline (Optional)</label>
          <input type="tel" name="landline" value={formData.landline} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email Address (Optional)</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        {/* File Uploads */}
        <h2>Upload Documents (At least 2 out of 3 required)</h2>

        <div className="form-group">
          <label>
            Aadhaar Card <span className="required">*</span>
          </label>
          <input type="file" name="aadhaarCard" onChange={handleFileChange} accept="image/*,application/pdf" />
        </div>

        <div className="form-group">
          <label>
            PAN Card <span className="required">*</span>
          </label>
          <input type="file" name="panCard" onChange={handleFileChange} accept="image/*,application/pdf" />
        </div>

        <div className="form-group">
          <label>
            Passport <span className="required">*</span>
          </label>
          <input type="file" name="passport" onChange={handleFileChange} accept="image/*,application/pdf" />
        </div>

        {error && <div className="error">{error}</div>}
        <button type="submit">Submit</button>
      </form>
      {uploadResult && (
        <div className="upload-result">
          <h3>Submission Result</h3>
          <pre>{JSON.stringify(uploadResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default KYCForm;

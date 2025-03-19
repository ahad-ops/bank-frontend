import React, { useState } from "react";
import "./VideoKYC.css";

const VideoKYC = () => {
  // State to store the server response, loading status, and error messages
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to initiate the Video KYC by calling the Flask `/detect` endpoint
  const startVideoKYC = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // IMPORTANT: Make sure this URL and port match where your Flask server is running
      // Typically Flask runs at http://127.0.0.1:5000 unless you configured otherwise
      const response = await fetch("http://127.0.0.1:5000/detect"); 
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse JSON response from Flask
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="video-kyc-container">
      <h1>Video KYC</h1>
      <button onClick={startVideoKYC} disabled={loading}>
        {loading ? "Processing..." : "Start Video KYC"}
      </button>

      {/* Display any errors */}
      {error && <div className="error">Error: {error}</div>}

      {/* Display the extracted data (if any) */}
      {result && (
        <div className="result">
          <h2>Detected Document Details</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default VideoKYC;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      setError("Password Mismatch");
    } else {
      setError("");
      alert("Password saved successfully!");
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <div className="input-group">
          <input
            type={showNew ? "text" : "password"}
            placeholder="Enter New password"
            className="input-field"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span className="icon" onClick={() => setShowNew(!showNew)}>
            {showNew ? "🚫" : "👁️"}
          </span>
        </div>

        <div className="input-group">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="icon" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? "🚫" : "👁️"}
          </span>
        </div>

        {error && <p className="error-text">*{error}</p>}

        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;

  
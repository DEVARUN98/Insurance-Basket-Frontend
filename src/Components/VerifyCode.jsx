import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VerifyCode.css";

function VerifyCode() {
    const navigate = useNavigate();
    const goToList = () => {
        navigate('/reset');
     }
  return (
    <div className="verify-container">
      <div className="verify-box">
        <input
          type="text"
          className="code-input"
          placeholder="Enter Code"
        />
         {/* <button className="verify-btn" >Verify</button> */}
        <button className="verify-btn" onClick={() => {navigate("/reset");}}>Verify</button>
      </div>
    </div>
  );
}

export default VerifyCode;

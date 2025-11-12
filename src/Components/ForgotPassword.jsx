import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {

    const navigate = useNavigate();
    const goToList = () => {
       navigate('/verify');
    }
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <p className="info-text">*A code has been sent to your e-mail address .</p>
        <input
          type="email"
          className="email-input"
          placeholder="Enter your E-mail Address"
        />
        <button className="continue-btn" onClick={() => {navigate("/verify");}}>Continue</button>
      </div>
    </div>
  );
}

export default ForgotPassword;

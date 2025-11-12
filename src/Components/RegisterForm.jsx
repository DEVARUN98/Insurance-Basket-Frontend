import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";
function RegisterForm() {

    const navigate = useNavigate();
    const goToList = () => {
       navigate('/login');
    }
  return (
    <div className="register-page">
      <div className="register-box">
        <input
          type="email"
          placeholder="E-mail"
          className="register-input"
        />
        <input
          type="text"
          placeholder="Name"
          className="register-input"
        />
        <div className="password-container">
          <input
            type="password"
            placeholder="Password"
            className="register-input password-input"
          />
          <span className="info-icon">!</span>
        </div>
        <p className="password-note">
          *Enter a combination of at least 8 numbers, letters and special characters.
        </p>
        <button className="create-btn" onClick={() => {navigate("/login");}}>Create</button>
        <p className="login-link">
            have an account? <a href="#"><p onClick={() => {navigate("/login");}}>Log in</p></a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;

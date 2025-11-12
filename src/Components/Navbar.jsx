import { useNavigate,useLocation } from "react-router-dom";
import "./AdminSession.css";
import iblogo from '../iblogo.png';

function Navbar(){
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();


return (
  <><nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src={iblogo} alt="Logo" />
      </div>
      <div className="navbar-right">
        {path === '/login' || path === '/register' || path === '/forgot' || path === '/verify' || path === '/reset' ? null : ""}
        {path === '/admin' ?
          <button className="logout-btn" onClick={() => {navigate("/login");}}>
            <span className="logout-icon">↩</span> Logout
          </button>
          : ""}

        {path === '/listdata' ? <><div className="nav-item" onClick={() => { navigate("/admin"); } }>New Entry
        </div>

        <button className="logout-btn" onClick={() => {navigate("/login");}}>
            <span className="logout-icon">↩</span> Logout
          </button>
        </> : ""}

      </div>
    </nav></>
);
}
export default Navbar;
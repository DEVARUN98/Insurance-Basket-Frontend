import React, { useState, useRef } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./AdminSession.css";
import iblogo from '../iblogo.png';

function Navbar(){
  const location = useLocation();
  const path = location.pathname;
  console.log("Current path:", path);
  const navigate = useNavigate();


const qtDateRef = useRef();
const regDateRef = useRef();
const seatingRef = useRef();

const [year, setYear] = useState("");

return (
  <><nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src={iblogo} alt="Logo" />
      </div>
      <div className="navbar-right">
        {path === '/login' || path === '/register' || path === '/forgot' || path === '/verify' || path === '/reset' ? null : ""}
        {path === '/admin' ?
          // <div className="nav-item-logout" onClick={() => { navigate("/login"); } }><span className="logout-icon">↩</span>Logout</div> 
          <button className="logout-btn" onClick={() => {navigate("/login");}}>
            <span className="logout-icon">↩</span> Logout
          </button>
          : ""}

        {path === '/listdata' ? <><div className="nav-item" onClick={() => { navigate("/admin"); } }>New Entry
          {/* <button onClick={''}>New Entry</button> */}
        </div>

        {/* <div className="nav-item-logout" onClick={() => { navigate("/login"); } }><span className="logout-icon">↩</span>Logout</div> */}
        <button className="logout-btn" onClick={() => {navigate("/login");}}>
            <span className="logout-icon">↩</span> Logout
          </button>
        </> : ""}


        {/* <div className="nav-item" onClick={() => {navigate("/admin");}}>New Entry
    </div>
      <div className="nav-item-logout" onClick={() => {navigate("/login");}}>Logout
      </div> */}
      </div>
    </nav></>
);
}
export default Navbar;
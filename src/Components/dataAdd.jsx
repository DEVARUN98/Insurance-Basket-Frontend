import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSession.css";

function AdminSession(){

  const navigate = useNavigate();


const qtDateRef = useRef();
const regDateRef = useRef();
const seatingRef = useRef();

const [year, setYear] = useState("");
const [dueDate, setDueDate] = useState("");
const [idv, setIdv] = useState("");
const [regno, setRegNo] = useState("");
const [ncb, setNcb] = useState("");
const [discount, setDiscount] = useState("");
const [seatingCapacity, setSeatingCapacity] = useState("");
const [legalLiability, setLegalLiability] = useState("");
const [po, setPo] = useState("");
const [company, setCompany] = useState("");
const [regYear, setRegYear] = useState("");
const [policyType, setPolicyType] = useState("");
const [institution, setInstitution] = useState("");
const [vehicleType, setVehicleType] = useState("");

const calculateRateandSAdd = () => {
  console.log("Calculate button clicked");
};

return (
  <div className="admin-container">
    {/* Top Bar */}
    {/* <header className="topbar">
      <img src={iblogo} alt="iblogo" className="logo" />
      <button className="logout-btn" onClick={() => {navigate("/login");}}>
        <span className="logout-icon">↩</span> Logout
      </button>
    </header> */}

    {/* Form Section */}
    <div className="form-container">
      <div className="form-grid">
        <div className="form-group">
          <label>Vehicle Type</label>
          <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option value="">Select</option>
            <option value="School Bus">School Bus</option>
            <option value="Other Vehicles">Other Vehicles</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reg no.</label>
          <input value={regno} onChange={(e) => setRegNo(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Qt Date</label>
          <input type="date" value={year} onChange={(e) => setYear(e.target.value)} ref={qtDateRef} />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>IDV</label>
          <input value={idv} onChange={(e) => setIdv(e.target.value)} />
        </div>
        <div className="form-group">
          <label>NCB</label>
          <input value={ncb} onChange={(e) => setNcb(e.target.value)} />
        </div>
        <div className="form-group">
          <label>OD Discount</label>
          <input value={discount} onChange={(e) => setDiscount(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Seating Capacity</label>
          <input
            value={seatingCapacity}
            onChange={(e) => setSeatingCapacity(e.target.value)}
            ref={seatingRef}
          />
        </div>
        <div className="form-group">
          <label>LL</label>
          <input value={legalLiability} onChange={(e) => setLegalLiability(e.target.value)} />
        </div>
        <div className="form-group">
          <label>PO</label>
          <input value={po} onChange={(e) => setPo(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Company</label>
          <select value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value="">Select</option>
            <option value="hdfc">RELIANCE</option>
            <option value="icici">TATA AIG</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reg Year</label>
          <input
            value={regYear}
            onChange={(e) => setRegYear(e.target.value)}
            ref={regDateRef}
          />
        </div>
        <div className="form-group">
          <label>Policy Type</label>
          <select value={policyType} onChange={(e) => setPolicyType(e.target.value)}>
            <option value="">Select</option>
            <option value="full">Full Cover</option>
            <option value="tp">Third Party</option>
          </select>
        </div>
        <div className="form-group">
          <label>Institution</label>
          <input value={institution} onChange={(e) => setInstitution(e.target.value)} />
        </div>
      </div>
         <button
               className="calculate-btn"
               onClick={() => {
               calculateRateandSAdd();
               navigate("/listdata");
               }}
               >
              Calculate
        </button>
      </div>
  </div>
);
}
export default AdminSession;
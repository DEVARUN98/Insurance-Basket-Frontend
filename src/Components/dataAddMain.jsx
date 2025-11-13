import  { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSession.css";

function DataAddMain(){

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
const [vehicleType, setVehicleType] = useState("");
  // const [result, setResult] = useState(null);
  // const [error, setError] = useState("");
  // const [odPremium,setOdPremium] = useState(null);
  const [institute,setInstitute] = useState("")

const calculateRateandSAdd=async ()=>{

    const qtDateValue = qtDateRef.current.value;
    const regDate = regDateRef.current.value;
    const seating = seatingRef.current.value;

    console.log("val1",qtDateValue)
    console.log("val2",regDate)
    console.log("val3",seating)

    const extractYear = qtDateValue ? new Date(qtDateValue).getFullYear():null
    const age = extractYear-regYear
    let localRate = 0;
    let localsAdd = 0;
    if(age<=5){
        console.log("age less than 5",age)
        console.log("seating cap",seating)
        localRate = 1.656
        if(seating<=18){
            localsAdd = 350
        }
        else if(seating>18 && seating<=36){
            console.log("seatig b/w 18 & 36",age)
            localsAdd = 450
        }
        else if(seating>36 && seating<=60){
            localsAdd = 550
        }
        else{
            localsAdd = 680
        }
    }
    else if(age>5 && age <=7){
        localRate = 1.697
        if(seatingCapacity<=18){
            localsAdd = 350
        }
        else if(seatingCapacity>18 && seatingCapacity<=36){
            localsAdd = 450
        }
        else if(seatingCapacity>36 && seatingCapacity<=60){
            localsAdd = 550
        }
        else{
            localsAdd = 680
        }
    }
    else{
        console.log("age greater")
        localRate = 1.739
        if(seatingCapacity<=18){
            localsAdd = 350
        }
        else if(seatingCapacity>18 && seatingCapacity<=36){
            localsAdd = 450
        }
        else if(seatingCapacity>36 && seatingCapacity<=60){
            localsAdd = 550
        }
        else{
            localsAdd = 680
        }
    }
    await CalculatePremium(localRate,localsAdd)    /* COMMENT THIS */
    navigate("/listdata");
    console.log("rate "+localRate+localsAdd)

}

// const handleCompany = (e) =>{
//   setCompany(e.target.value)
// }

// const handlePolicyType = (e) =>{
//   setPolicyType(e.target.value)
// }

const CalculatePremium = async (rate,sAdd) => {

    const requestData = {
      year: year || null,               // send as string or null
      dueDate: dueDate || null,         // send as string or null
      idv: parseFloat(idv) || 0,
      regno: regno || "",
      rate: parseFloat(rate) || 0,
      sAdd: parseFloat(sAdd) || 0,
      ncb: parseFloat(ncb) || 0,
      discount: parseFloat(discount) || 0,
      seatingCapacity: parseInt(seatingCapacity, 10) ,
      legalLiability: parseFloat(legalLiability) || 0,
      po: parseFloat(po) || 0,
      // odPremium: parseFloat(odPremium) || 0,
      regYear: regYear || null,
      company:company || null,
      policyType:policyType || null,
      institute:institute || null

    };
    // SETERROR AND SETRESULT COMMENTED ONLY FOR NETLIFY ISSUE
    try {
        console.log("reqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",requestData);
      const response = await fetch("https://insurance-basket-backend.onrender.com/api/v1/calculationnew/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("resultttttttttttttttttttttttt",data)
      if (response.ok) {
        // setResult(data);
        // setError("");
        console.log("Calculation Result:", data);
      } else {
        // setError("Validation failed: " + JSON.stringify(data));
        // setResult(null);
      }
    } catch (err) {
      // setError("Network error: " + err.message);
      // setResult(null);
    }
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
            <option value="Reliance">RELIANCE</option>
            <option value="Tata AIG">TATA AIG</option>
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
          <input value={institute} onChange={(e) => setInstitute(e.target.value)} />
        </div>
      </div>
         <button
               className="calculate-btn"
               onClick={async () => {await calculateRateandSAdd();
               }}
               >
              Calculate
        </button>
      </div>
  </div>
);
}
export default DataAddMain;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./DataDisplay.css";
import iblogo from '../iblogo.png';

// function DataDisplay() {
//     const navigate = useNavigate();
//   const [calculatedValues, setCalculatedValues] = useState([]);


//     const fetchCalculatedValues = async () => {
//     try {
//       const response = await fetch("https://insurance-basket-backend.onrender.com/api/v1/calculationnew/");
//       const data = await response.json();
//       console.log("Fetched calculated values:", data.results);
//       setCalculatedValues(data.results);

//       console.log('Is Array',Array.isArray (calculatedValues));
//     } catch (err) {
//       console.error("Error fetching calculated values:", err);
//     }
// }
  
//     return (
//       <div className="data-page">
//         {/* --- Topbar --- */}
//         <div className="topbar">
//           <div className="logo-section">
//             <img src={iblogo} alt="iblogo" className="logo" />
//             <span className="logo-text">
//                <span className="highlight"></span>
//             </span>
//           </div>
        
  
//           <div className="topbar-buttons">
//             <button className="new-entry-btn" onClick={() => navigate("/admin")}>
//               New Entry
//             </button>
//             <button className="logout-btn" onClick={() => {navigate("/login");}}>
//                  <span className="logout-icon">↩</span> Logout
//             </button>
//           </div>
//           <div className="search-bar">
//            <svg
//             xmlns="http://www.w3.org/2000/svg"
//              width="18"
//              height="18"
//              fill="none"
//              stroke="gray"
//              strokeWidth="2"
//              strokeLinecap="round"
//              strokeLinejoin="round"
//              className="search-icon"
//            >
//           <circle cx="8" cy="8" r="6" />
//           <line x1="12" y1="12" x2="17" y2="17" />
//           </svg>

//            <input type="text" placeholder="Search..." />
//          </div>
//         </div>
//         <div className="data-container">
//         <div className="search-bar">
//             <input type="text" placeholder="Search" />
//         </div>
  
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Regn no.</th>
//                 <th>Due Date</th>
//                 <th>Year</th>
//                 <th>IDV</th>
//                 <th>NCB</th>
//                 <th>Total Premium</th>
//                 <th>Payable</th>
//                 <th>Company</th>
//                 <th>Owner Name</th>
//               </tr>
//             </thead>

//             <tbody>
//             {calculatedValues.map((calc)=>(
//                 <tr key={calc.id}>
//                     <td>{calc.id}</td>
//                     <td>{calc.regno}</td>
//                     <td>{calc.idv}</td>
//                     <td>{calc.sAdd}</td>
//                     <td>{calc.rate}</td>
//                     <td>{calc.regYear}</td>
//                     <td>{calc.discount}</td>
//                     <td>{calc.company}</td>
//                     <td>{calc.institute}</td>
//                     <td>{calc.policyType}</td>
//                     <td>{calc.payableAmount?.toFixed(0)}</td>
//                 </tr>
//             ))}
//         </tbody>
//             {/* <tbody>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//             </tr>
     
//             </tbody> */}
//           </table>
//         </div>
//       </div>
//     );
//   }
  
//   export default DataDisplay;








import React from "react";

const styles = {
  container: {
    background: "#71b6bb",
    minHeight: "100vh",
    padding: "10",
    fontFamily: "sans-serif",
  },
  topBar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "20px 50px 0px 0px",
  },
  button: {
    background: "#ffe7aa",
    borderRadius: "20px",
    border: "none",
    padding: "12px 36px",
    marginRight: "24px",
    fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer",
  },
  logout: {
    background: "#e0dfdf",
    borderRadius: "15px",
    border: "none",
    padding: "9px 22px",
    fontWeight: "bold",
    fontSize: "17px",
    cursor: "pointer",
  },
  tableContainer: {
    margin: "32px 32px",
    background: "#71b6bb",
    borderRadius: "10px",
    border: "2px solid #222",
    overflowX: "auto",
    padding: "24px 18px",
  },
  searchBar: {
    float: "right",
    marginTop: "10px",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  input: {
    padding: "6px 13px",
    borderRadius: "22px",
    border: "1px solid #555",
    fontSize: "17px",
    width: "210px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "white",
  },
  th: {
    fontWeight: "bold",
    fontSize: "19px",
    border: "2px solid #222",
    padding: "14px 8px",
    background: "#f2f8f9ff",
    textAlign: "center",
  },
  td: {
    border: "2px solid #222",
    padding: "15px 11px",
    textAlign: "center",
    fontSize: "18px",
  },
};

const InsuranceTable = () => {
  // Placeholder for table data
  const rows = [];

  return (
    <div style={styles.container}>
      <img  src={iblogo} alt="iblogo" className="logo"/>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <button style={styles.button}>New Entry</button>
        <button style={styles.logout}>Logout</button>
      </div>
      
      {/* Logo + Table */}
      <div style={styles.tableContainer}>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            style={styles.input}
          />
          <span role="img" aria-label="search">🔍</span>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Regn no.</th>
              <th style={styles.th}>Due Date</th>
              <th style={styles.th}>Year</th>
              <th style={styles.th}>IDV</th>
              <th style={styles.th}>NCB</th>
              <th style={styles.th}>Total Premium</th>
              <th style={styles.th}>Payable</th>
              <th style={styles.th}>Company</th>
              <th style={styles.th}>Owner Name</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td style={styles.td} colSpan={9}>No data available</td>
              </tr>
            ) : (
              rows.map((row, idx) => (
                <tr key={idx}>
                  <td style={styles.td}>{row.regnNo}</td>
                  <td style={styles.td}>{row.dueDate}</td>
                  <td style={styles.td}>{row.year}</td>
                  <td style={styles.td}>{row.idv}</td>
                  <td style={styles.td}>{row.ncb}</td>
                  <td style={styles.td}>{row.premium}</td>
                  <td style={styles.td}>{row.payable}</td>
                  <td style={styles.td}>{row.company}</td>
                  <td style={styles.td}>{row.owner}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InsuranceTable;

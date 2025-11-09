import React, { useState, useEffect, useRef } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import iblogo from '../iblogo.png'; // Ensure path is correct
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ListDataSearch.css'; // Import CSS file
// import { useNavigate } from "react-router-dom";

function ListDataSearch() {
  const location = useLocation();
  const path = location.pathname;
  console.log("Current path:", path);

  const navigate = useNavigate();
  const [calculatedValues, setCalculatedValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const printRef = useRef();

  useEffect(() => {
    async function fetchCalculatedValues() {
      try {
        const response = await fetch("https://insurance-basket-backend.onrender.com/api/v1/calculationnew/");
        const data = await response.json();
        console.log("Error fetching calculated values:", data);
        setCalculatedValues(data.results || []);
      } catch (err) {
        console.error("Error fetching calculated values:", err);
      }
    }
    fetchCalculatedValues();
  }, []);

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      setResults([]);
      return;
    }
    const url = `https://insurance-basket-backend.onrender.com/api/v1/calculationnew/?search=${encodeURIComponent(searchValue)}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setResults(data.results || []);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResults([]);
    }
  };

  const handlePrintPDF = () => {
    const original = printRef.current;
    const clone = original.cloneNode(true);

    // Remove search fields and buttons for PDF
    const searchRow = clone.querySelector('.search-row');
    if (searchRow) searchRow.remove();
    const addNewBtn = clone.querySelector('.add-new-btn');
    if (addNewBtn) addNewBtn.remove();

    const printBtn = clone.querySelector('.print-btn');
    if (printBtn) printBtn.remove();

    const searchHeading = clone.querySelector('.listdata-heading');
    if (searchHeading) searchHeading.remove();
    

    // Add watermark logo background for PDF
    const bgDiv = document.createElement('div');
    bgDiv.style.position = 'absolute';
    bgDiv.style.top = '0';
    bgDiv.style.left = '0';
    bgDiv.style.width = '100%';
    bgDiv.style.height = '100%';
    bgDiv.style.opacity = '0.10';
    bgDiv.style.zIndex = '-1';
    bgDiv.style.backgroundImage = `url(${iblogo})`;
    bgDiv.style.backgroundRepeat = 'no-repeat';
    bgDiv.style.backgroundPosition = 'center';
    bgDiv.style.backgroundSize = 'auto';
    bgDiv.style.backgroundColor = '#009933';

    clone.style.position = 'relative';
    clone.insertBefore(bgDiv, clone.firstChild);

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '-10000px';
    container.style.left = '-10000px';
    container.style.background = '#009933'; // Green background for PDF
    container.style.width = original.offsetWidth + 'px';
    container.style.minHeight = '100vh';
    container.style.boxSizing = 'border-box';
    container.appendChild(clone);
    document.body.appendChild(container);

    html2canvas(clone, { scale: 2, useCORS: true, backgroundColor: null }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4',
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('calculation-results.pdf');

      document.body.removeChild(container);
    });
  };

  const displayData = results.length > 0 ? results : calculatedValues;
  const CalcPayable = displayData.reduce((sum, item) => sum + (item.payableAmount || 0), 0);
  const CalcTotPremium = displayData.reduce((sum, item) => sum + (item.totalPremium || 0), 0);

  return (
    <div className="fullscreen-bg">
      <div ref={printRef} className="listdata-main">
        <div className="search-row">
          <input
            type="text"
            placeholder="Search any field"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <h3 className="listdata-heading">
          {results.length > 0 ? "Search Results" : "All Data"}
        </h3>

        {displayData.length > 0 ? (
          <table className="listdata-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>reg no</th>
                <th>IDV</th>
                <th>sAdd</th>
                <th>RATE</th>
                <th>regYear</th>
                <th>Discount</th>
                <th>Company</th>
                <th>Institution</th>
                <th>Policy Type</th>
                <th>Payable</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((res, i) => (
                <tr key={res.id}>
                  <td>{res.id}</td>
                  <td>{res.regno}</td>
                  <td>{res.idv}</td>
                  <td>{res.sAdd}</td>
                  <td>{res.rate}</td>
                  <td>{res.regYear}</td>
                  <td>{res.discount}</td>
                  <td>{res.company}</td>
                  <td>{res.institute}</td>
                  <td>{res.policyType}</td>
                  <td>{res.payableAmount?.toFixed(0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ color: "#fff", textAlign: "center", margin: "48px 0" }}>No data available</p>
        )}
        {results.length > 0 && (
            <div className="listdata-totals">
          <div className="listdata-totalbox">
            Total Premium: {CalcTotPremium.toFixed(0)}
          </div>
          <div className="listdata-totalbox">
            Total Payable: {CalcPayable.toFixed(0)}
          </div>
        </div>
          )}
        
        <div>
          {results.length > 0 && (
            <button
              onClick={handlePrintPDF}
              className="print-btn"
            >
              Print / Download PDF
            </button>
          )}
        </div>

        <footer className="listdata-footer">
          Powered by Insure Basket &copy; {new Date().getFullYear()}
        </footer>
      </div>

      
    </div>
  );
}

export default ListDataSearch;

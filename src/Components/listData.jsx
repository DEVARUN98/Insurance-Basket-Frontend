import React, { useState ,useEffect, use} from "react";
import image from '../images.png';
import { useNavigate } from "react-router-dom";


function ListData() {

    const navigate = useNavigate();
  // State variables
  const [calculatedValues, setCalculatedValues] = useState([]);


  const fetchCalculatedValues = async () => {
    try {
      const response = await fetch("https://insurance-basket-backend.onrender.com/api/v1/calculationnew/");
      const data = await response.json();
      console.log("Fetched calculated values:", data.results);
      setCalculatedValues(data.results);

      console.log('Is Array',Array.isArray (calculatedValues));
    } catch (err) {
      console.error("Error fetching calculated values:", err);
    }
}



useEffect(() => {
    fetchCalculatedValues();
}, []);

  return (
    <div>

       {/* <button onClick={()=>na}>add new</button> */}
      <button onClick={()=>navigate("/")}>add new</button>
      
        {/* {alert("lengthhhhhhhhhhhhhhhhhhh",calculatedValues.length)} */}
        {/* {console.log("lengthhhhhhhhhhhhhhhhhhh",calculatedValues.length)} */}
        <button onClick={()=>navigate("/search")}>search</button>
      <h3>all data</h3>
      {/* {alert("calculatedValues length"+calculatedValues.length)} */}
      {calculatedValues.length > 0 ?
      <table border="1" >
        <thead>
            <tr>
                <td>Id</td>
                <td>IDV</td>
                <td>sAdd</td>
                <td>RATE</td>
                <td>regYear</td>
                <td>Discount</td>
                <td>Payable</td>
            </tr>
        </thead>
        
        <tbody>
            {calculatedValues.map((calc)=>(
                <tr key={calc.id}>
                    <td>{calc.id}</td>
                    <td>{calc.idv}</td>
                    <td>{calc.sAdd}</td>
                    <td>{calc.rate}</td>
                    <td>{calc.regYear}</td>
                    <td>{calc.discount}</td>
                    <td>{calc.payableAmount?.toFixed(0)}</td>
                </tr>
            ))}
        </tbody>
      </table>
      
      :
      ""}
      

    </div>
  );
}

export default ListData;

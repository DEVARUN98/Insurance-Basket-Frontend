import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    console.log("okkkkkkkkkkkkk");
    
    e.preventDefault();
    setError('');
    setResult(null);

    const requestData = {
      num1: parseFloat(num1),
      num2: parseFloat(num2),
      operation,
    };

    try {
      const response = await fetch('https://insurance-basket-backend.onrender.com/api/v1/comments/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.result);
      } else {
        setError(data.error || 'Calculation failed.');
      }
    } catch (err) {
      setError('Network error: ' + err.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Number 1"
          required
        />
        <br /><br />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Number 2"
          required
        />
        <br /><br />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </select>
        <br /><br />
        <button type="submit">Calculate</button>
      </form>

      {result !== null && <h3 style={{ marginTop: '20px' }}>Result: {result}</h3>}
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
    </div>
  );
}

export default Calculator;

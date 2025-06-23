import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operator";
    }
    setResult(res);
  };

  return (
    <div style={{ backgroundColor: '#4B0082', height: '100vh', color: 'white', textAlign: 'center', paddingTop: '50px' }}>
      <h1>Adding Two Numbers</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ padding: '10px', margin: '10px', fontSize: '20px', width: '80px' }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ padding: '10px', margin: '10px', fontSize: '20px', width: '80px' }}
      />

      <br />

      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
        style={{ padding: '10px', fontSize: '18px', marginTop: '10px' }}
      >
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Division (/)</option>
      </select>

      <br />

      <button
        onClick={calculate}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#8A2BE2',
          color: 'white',
          fontSize: '18px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Calculate
      </button>

      {result !== null && (
        <h2 style={{ marginTop: '30px', fontSize: '40px' }}>{result}</h2>
      )}
    </div>
  );
}

export default App;

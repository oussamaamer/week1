import React, { useState } from 'react';
import quotes from './quotes';

const getRandomIndex = (excludeIndex) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === excludeIndex);
  return newIndex;
};

const getRandomColor = () => {
  const colors = ["#2c3e50", "#8e44ad", "#16a085", "#c0392b", "#2980b9"];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    const newIndex = getRandomIndex(index);
    setIndex(newIndex);
    setColor(getRandomColor());
  };

  const { quote, author } = quotes[index];

  return (
    <div style={{
      backgroundColor: color,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        maxWidth: "600px",
        textAlign: "center"
      }}>
        <h1 style={{ color: color }}>"{quote}"</h1>
        <p style={{ fontStyle: "italic", color: "#555" }}>- {author}</p>
        <button
          onClick={handleNewQuote}
          style={{
            marginTop: "20px",
            backgroundColor: color,
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;

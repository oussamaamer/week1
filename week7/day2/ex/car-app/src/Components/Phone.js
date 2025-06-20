import React, { useState } from "react";

const Phone = () => {
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h2>Phone Info</h2>
      <p>
        <strong>Brand:</strong> {brand}
      </p>
      <p>
        <strong>Model:</strong> {model}
      </p>
      <p>
        <strong>Color:</strong> {color}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
      <>
        <h1>MY phone is a {brand}</h1>
        it is {color} {model} from {year}
      </><br></br>
      <button onClick={changeColor}>Change color to blue</button>;
    </div>
  );
};

export default Phone;

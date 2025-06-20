
import React, { useState } from "react";

const Events = () => {
  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`You typed: ${event.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleToggle = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <div>
      <h2>Event Handling Example</h2>

      {/* Part I */}
      <button onClick={clickMe}>Click Me</button>

      <br />
      <br />

      {/* Part II */}
      <input
        type="text"
        placeholder="Type something and press Enter"
        onKeyDown={handleKeyDown}
      />

      <br />
      <br />

      {/* Part III */}
      <button onClick={handleToggle}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default Events;

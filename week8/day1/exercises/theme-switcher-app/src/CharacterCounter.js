import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div>
      <h2>✍️ Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Tape quelque chose..."
      />
      <p>Nombre de caractères : {count}</p>
    </div>
  );
};

export default CharacterCounter;

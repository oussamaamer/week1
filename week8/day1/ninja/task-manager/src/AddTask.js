import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTask;

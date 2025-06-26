import React, { useContext, useRef } from "react";
import TaskContext from "../TaskContext";

const TaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), text, completed: false },
      });
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Nouvelle tâche" />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskForm;

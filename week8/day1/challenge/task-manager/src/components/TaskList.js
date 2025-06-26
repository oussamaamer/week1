import React, { useContext, useRef, useState } from "react";
import TaskContext from "../TaskContext";

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [editingId, setEditingId] = useState(null);
  const editRef = useRef();

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === "COMPLETED") return task.completed;
    if (state.filter === "ACTIVE") return !task.completed;
    return true;
  });

  const saveEdit = (id) => {
    const newText = editRef.current.value.trim();
    if (newText) {
      dispatch({ type: "EDIT_TASK", payload: { id, text: newText } });
      setEditingId(null);
    }
  };

  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
          />

          {editingId === task.id ? (
            <>
              <input defaultValue={task.text} ref={editRef} />
              <button onClick={() => saveEdit(task.id)}>Sauvegarder</button>
            </>
          ) : (
            <>
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
              </span>
              <button onClick={() => setEditingId(task.id)}>Modifier</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

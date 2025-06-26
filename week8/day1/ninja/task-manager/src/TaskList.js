import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  if (tasks.length === 0) return <p>Aucune tâche.</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
          <button onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
            {task.completed ? "Annuler" : "Compléter"}
          </button>
          <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

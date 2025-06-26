import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TaskContext } from "./TaskContext";


const App = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📝 Task Manager</h1>
      <AddTask />
      <TaskList />
      <TaskContext />
    </div>
  );
};

export default App;

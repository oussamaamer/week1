import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const App = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📝 Task Manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;

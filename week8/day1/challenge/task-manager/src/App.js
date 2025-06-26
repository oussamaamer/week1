import React from "react";
import { TaskProvider } from "./TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

const App = () => {
  return (
    <TaskProvider>
      <h1>Gestionnaire de Tâches</h1>
      <TaskForm />
      <FilterButtons />
      <TaskList />
    </TaskProvider>
  );
};

export default App;

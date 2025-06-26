import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const TaskContext = createContext();

const initialState = {
  tasks: [],
  filter: "ALL", // ALL | COMPLETED | ACTIVE
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

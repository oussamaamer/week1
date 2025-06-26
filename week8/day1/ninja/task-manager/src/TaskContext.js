import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

const initialState = [];

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: uuidv4(), text: action.payload, completed: false }];
    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

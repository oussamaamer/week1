import React, { useContext } from "react";
import TaskContext from "../TaskContext";

const FilterButtons = () => {
  const { dispatch } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "ALL" })}>Toutes</button>
      <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "COMPLETED" })}>Complétées</button>
      <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "ACTIVE" })}>Actives</button>
    </div>
  );
};

export default FilterButtons;

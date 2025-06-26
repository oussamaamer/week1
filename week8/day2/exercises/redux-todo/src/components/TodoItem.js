import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? "Annuler" : "Terminer"}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Supprimer</button>
    </li>
  );
};

export default TodoItem;

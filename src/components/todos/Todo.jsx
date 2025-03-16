import React from "react";

import "./Todos.css";
import Todos from "./Todos";
import { FaTrashCan } from "react-icons/fa6";

function Todo({ todo, deleteTodo }) {
  console.log(todo);
  return (
    <li className="todo">
      <span>{todo.text}</span>
      <FaTrashCan className="close" onClick={() => deleteTodo(todo.id)} />
    </li>
  );
}

export default Todo;

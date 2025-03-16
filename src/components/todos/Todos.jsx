import React, { useEffect, useState } from "react";

import "./Todos.css";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    // setTodos((prev) => [...prev, {id: uuidv4(), text: input }]); // optoin 1
    setTodos((todo) =>
      todos.concat({
        id: uuidv4(),
        text: input,
      })
    );
    setInput("");
  };
  const deleteTodo = (id) => {
    console.log(id);
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => {
        return todo.id != id;
      });
    });
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Todo"
          name="input"
          value={input}
          onChange={(e) => setInput((prev) => e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todos-list">
        {todos.length > 0 ? (
          todos.map((todo) => {
            console.log(todo);
            return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
          })
        ) : (
          <h3 className="todo-not-found">No Todos found</h3>
        )}
      </ul>
    </div>
  );
}

export default Todos;

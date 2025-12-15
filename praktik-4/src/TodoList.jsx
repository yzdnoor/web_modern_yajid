import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, completed

  // Tambah todo baru
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // Toggle status selesai
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Hapus todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Statistik
  const totalTodos = todos.length;
  const activeTodos = todos.filter((t) => !t.completed).length;

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      {/* Input tambah todo */}
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          placeholder="Tambahkan todo baru..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Tambah</button>
      </div>

      {/* Filter tombol */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>

      {/* Daftar todo */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Hapus</button>
          </li>
        ))}
      </ul>

      {/* Statistik */}
      <div className="todo-stats">
        <p>
          Total Todos: {totalTodos} | Aktif: {activeTodos}
        </p>
      </div>
    </div>
  );
};

export default TodoList;

// src/App.js
import React, { useEffect, useState } from "react";
import TrelloBoard from "./components/TrelloBoard";
import "../src/styles/global.css";
import "../src/styles/responsive.css";
import {
  fetchTodos,
  updateTodoStatus,
  addTodo,
  editTodo,
  deleteTodo,
} from "../src/apihandler";

const App = () => {
  
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const limit = 20;

  const loadTodos = async () => {
    const todosData = await fetchTodos(skip, limit);
    setTodos((prevTodos) => [...prevTodos, ...todosData]);
    setLoading(false);
  };

  // Fetch initial dummy todolist
  useEffect(() => {
    loadTodos();
  }, [skip]);

  // Handle load more button functionality
  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };

  // Handler to update todo status
  const handleUpdateTodoStatus = async (id, newStatus) => {
    await updateTodoStatus(id, newStatus);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  // Handler to add new todo
  const handleAddTodo = async (status, newTodo) => {
    const newTodoData = await addTodo(status, newTodo);
    if (newTodoData) {
      setTodos((prevTodos) => [...prevTodos, { ...newTodoData, status }]);
    }
  };

  // Handler to add edit todo
  const handleEditTodo = async (id, updatedTodo) => {
    const previousTodos = todos;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todo: updatedTodo } : todo
      )
    );
  
    try {
      await editTodo(id, updatedTodo);
    } catch (error) {
      console.error("Failed to edit todo:", error);
      setTodos(previousTodos);
    }
  };
  

  // Handle to delete todo
  const handleDeleteTodo = async (id) => {
    const previousTodos = todos;
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    try {
      await deleteTodo(id);  
    } catch (error) {
      console.error("Failed to delete todo:", error);
      setTodos(previousTodos);
    }
  };
  

  return (
    <div className="app">
      <h1>Trello Board</h1>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <TrelloBoard
            todos={todos}
            updateTodoStatus={handleUpdateTodoStatus}
            addTodo={handleAddTodo}
            editTodo={handleEditTodo}
            deleteTodo={handleDeleteTodo}
          />
          <button className="font_twentyfourpx font_weight_500" onClick={handleLoadMore}>Load More</button>
        </>
      )}
    </div>
  );
};

export default App;

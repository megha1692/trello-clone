import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../styles/lane.css';
import CustomButton from "../atoms/customButton";

const TrelloLane = React.memo(({ status, todos, updateTodoStatus, addTodo, editTodo, deleteTodo }) => {
  const [showAddBox, setShowAddBox] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  // Handle drop event to update todo status
  const handleDrop = (e) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData('todoId');
    updateTodoStatus(Number(todoId), status);
  };

  // Handle add todo 
  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      addTodo(status, newTodoTitle, newTodoDescription);
      setNewTodoTitle('');
      setNewTodoDescription('');
      setShowAddBox(false);
    }
  };

  return (
    <div
      className="todo-lane"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop} 
    >
      <h2>{status}</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
      ))}
      {showAddBox ? (
        <div className="add-todo-box">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add New Todo"
          />
          <button className="save_button" onClick={handleAddTodo}>Save</button>
          <button className="cancel_button" onClick={() => setShowAddBox(false)}>Cancel</button>
        </div>
      ) : (
        <button className="save_button" onClick={() => setShowAddBox(true)}>+ Add New Card</button>
      )}
    </div>
  );
});

export default TrelloLane;

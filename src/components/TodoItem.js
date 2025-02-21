import React, { useState } from 'react';
import '../styles/todoItem.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);
  const [editedDescription, setEditedDescription] = useState(todo.description || '');

  // Handle drag start event to transfer todo id
  const handleDragStart = (e) => {
    e.dataTransfer.setData('todoId', todo.id);
  };

  // Handle save edited todo item
  const handleSave = () => {
    editTodo(todo.id, editedTodo, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="todo-item" draggable onDragStart={handleDragStart}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            placeholder="Edit Title"
          />
          <button className="save_button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3 onDoubleClick={() => setIsEditing(true)}>{todo.todo}</h3>
          <p>{todo.description}</p>
          <button onClick={() => setIsEditing(true)}>
            <FaEdit />
          </button>
          <button onClick={() => deleteTodo(todo.id)}>
            <FaTrash />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;

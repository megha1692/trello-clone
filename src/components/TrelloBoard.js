import React, {useState, useEffect} from 'react';
import TrelloLane from './TrelloLane.js';
import '../styles/board.css';
import useIsMobile from "../hooks/useMobile.js";
import {lanes} from "../constant.js";

const TrelloBoard = ({ todos, updateTodoStatus, addTodo, editTodo, deleteTodo }) => {
  const [currentLaneIndex, setCurrentLaneIndex] = useState(0);

  // next button handling
  const nextLane = () => {
    if (currentLaneIndex < lanes.length - 1) {
      setCurrentLaneIndex(currentLaneIndex + 1);
    }
  };

  // previous button handling
  const prevLane = () => {
    if (currentLaneIndex > 0) {
      setCurrentLaneIndex(currentLaneIndex - 1);
    }
  };

  // check screen size by using useIsMobile hook
  const isMobile = useIsMobile();

  return (
    <div className="trello-board">
      {isMobile && <button onClick={prevLane} disabled={currentLaneIndex === 0}>Prev</button>}
      {isMobile && <button onClick={nextLane} disabled={currentLaneIndex === lanes.length - 1}>Next</button>}
      {isMobile ? (
        <TrelloLane
          status={lanes[currentLaneIndex]}
          todos={todos.filter((todo) => todo.status === lanes[currentLaneIndex])}
          updateTodoStatus={updateTodoStatus}
          addTodo={addTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ) : (
        lanes.map((lane) => (
          <TrelloLane
            key={lane}
            status={lane}
            todos={todos.filter((todo) => todo.status === lane)}
            updateTodoStatus={updateTodoStatus}
            addTodo={addTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
};

export default TrelloBoard;
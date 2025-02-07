import React from "react";

const Todocomp = ({ task, onComplete, onDelete }) => {
  return (
    <div className="task-item">
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <button onClick={() => onComplete(task.id)}>✔</button>
      <button onClick={() => onDelete(task.id)}>🗑</button>
    </div>
  );
};

export default Todocomp;

import React, { useState } from "react";
import TaskItem from "./components/Todocomp";
import "./App.css";
import Todocomp from "./components/Todocomp";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>+</button>
      </div>

      <h3>Tasks - {tasks.length}</h3>
      <div className="task-list">
        {tasks.map((task) => (
          <Todocomp key={task.id} task={task} onComplete={completeTask} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default App;

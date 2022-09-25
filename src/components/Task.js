import React from "react";

function Task({text, category, onDeleteTask, id}) {
  
  function deleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
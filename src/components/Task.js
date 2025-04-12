import React from "react";

function Task({ task, text, category, onDelete }) {
  const taskText = task ? task.text : text;
  const taskCategory = task ? task.category : category;
  const taskIdToDelete = task ? task.id : null;

  const handleDeleteClick = () => {
    if (taskIdToDelete !== null) {
      onDelete(taskIdToDelete);
    }
  };

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;

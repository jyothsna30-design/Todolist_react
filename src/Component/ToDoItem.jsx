import "./style.css"
import { useState } from 'react'


function ToDoItem({ todo, onToggleComplete, onDelete, onEdit }) {
   
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editValue);
    setIsEditing(false);
  };

  return (
    
    <div className="items">
      
      {isEditing ? (
        <>
          <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{fontSize:30,color:"burlywood"}}>{todo.text}</span>
           
          <button className="btn2" onClick={() => onToggleComplete(todo.id)}>
            {todo.completed && "✔"}
          </button>
          <button onClick={() => setIsEditing(true)}>✍</button>
        </>
      )}
      <button onClick={() => onDelete(todo.id)}>🗑️</button>
    </div>
  );
}

export default ToDoItem;
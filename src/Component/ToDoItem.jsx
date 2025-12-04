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
    <li style={{ marginTop: "10px" }}>
      {/* EDIT MODE */}
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {/* TEXT (Click to toggle complete) */}
          <span
            onClick={() => onToggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>

          {/* EDIT BUTTON */}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      {/* DELETE BUTTON */}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}


//      const [isEditing, setIsEditing] = useState(false);
//   const [editValue, setEditValue] = useState(arr.name);
  

//   const handleSave = () => {
//     onEdit(arr.id, editValue);
//     setIsEditing(false);
//   };


//   return (
//     <li style={{ marginTop: "10px" }}>
//       {/* EDIT MODE */}
//       <span>{arr.name}</span>
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editValue}
//             onChange={(e) => setEditValue(e.target.value)}
//           />
//           <button onClick={handleSave}>Save</button>
//         </>
//       ) : (
//         <>
//           {/* TEXT (Click to toggle complete) */}
//           <span
//             onClick={() => onComplete(arr.id)}
//             style={{
//               textDecoration: arr.completed ? "line-through" : "none",
//               cursor: "pointer",
//               marginRight: "10px",
//             }}
//           >
//             {arr.name}
//           </span>

//           {/* EDIT BUTTON */}
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         </>
//       )}

//       {/* DELETE BUTTON */}
//       <button onClick={() => onDelete(arr.id)}>Delete</button>
//     </li>
//   );
    


export default ToDoItem;
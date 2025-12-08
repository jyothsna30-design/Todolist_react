import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './Component/ToDoList'

import Header from './Component/Header.jsx'
import "./Component/style.css"

function App() {
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState("");

 //Adding items to the list
  const handleAddItem = () => {
    if (inputValue.trim() === "") return;

    const newItem = {
      id: Date.now(),       
      text: inputValue,
      completed: false,
    };

    setArr([...arr, newItem]);
    setInputValue("");
  };


  //marking as complete
  const handleToggleComplete = (id) => {
    const updated = arr.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    setArr(updated);
  };

 //deletion
  const handleDelete = (id) => {
    setArr(arr.filter((todo) => todo.id !== id));
  };

  //Editing
  const handleEdit = (id, newText) => {
    const updated = arr.map((todo) => todo.id === id ? { ...todo, text: newText } : todo);
    setArr(updated);
  };

  return (
    <div>
      <Header></Header>
      <input type="text" placeholder="Enter a task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleAddItem}>Add</button>
      <ToDoList todos={arr} onToggleComplete={handleToggleComplete} onDelete={handleDelete} onEdit={handleEdit}/>
    </div>
  );
}

export default App;



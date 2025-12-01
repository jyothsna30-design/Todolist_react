import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './Component/ToDoList'
import {items} from './Component/Header'
import "./Component/style.css"

function App() {
 
 const [search,setSearch] = useState("");
 const [filteredname,setFilteredname] = useState(items);

 function handleSearch(){
  console.log(search)
  const filtername = items.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
   setFilteredname(filtername);
}
  return (<>
  <h1>To-Do-List</h1>
  <div className="searchlist">
    <input type="text" name=" " className="search" onChange={(e)=>setSearch(e.target.value)}></input>
    <button className="btn" onClick={handleSearch}>search</button>
  </div>
  <ToDoList itemsData={filteredname}></ToDoList>
  </>)
   
}

export default App

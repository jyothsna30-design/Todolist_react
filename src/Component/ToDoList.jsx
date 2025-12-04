
import ToDoItem from "./ToDoItem";
import "./style.css"
function ToDoList({ todos, onToggleComplete, onDelete, onEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
// function ToDoList({arr,onComplete,onDelete,onEdit}){
//     return (<>
//     <div className="list">
//     {arr.map((data)=> (<ToDoItem key={data.id} arr={data} onComplete={onComplete} onDelete={onDelete} onEdit={onEdit}/>) )}
    
//     </div>
    
//     </>)
// }

export default ToDoList;
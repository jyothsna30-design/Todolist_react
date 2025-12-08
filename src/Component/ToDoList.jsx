
import ToDoItem from "./ToDoItem";
import "./style.css"
function ToDoList({ todos, onToggleComplete, onDelete, onEdit }) {
  //Setting unique key and sending props to todoitem component
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

export default ToDoList;
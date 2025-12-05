
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

export default ToDoList;
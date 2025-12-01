
import ToDoItem from "./ToDoItem";
import "./style.css"
function ToDoList(props){
    return (<>
    <div className="list">
    {props.itemsData.map((data)=> (<ToDoItem key={data.id} itemDetails={data} />) )}
    </div>
    
    </>)
}

export default ToDoList;
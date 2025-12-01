import "./style.css"

function ToDoItem(props){
    return(<>
    <div className="displayitem">
    <h2>{props.itemDetails.name}</h2>
    </div>
    </>)
}

export default ToDoItem;
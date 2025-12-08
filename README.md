
##App.jsx
  Input text : on change the value is stored in input value
  button : on click it goes to handleAddItem
  handleAddItem(): adds a new item to the array.
  handleToggleComplete(): if id is equal to the id in the array,it will change the completed status and set it to the array..
  handleDelete(): if id is present in the array,all items are copied to new array except that id item.
  handleEdit():if id is equal to the id in the array,it will add newtext and set it to the array..
  Sending props to ToDoList Component.

  #Header.jsx
   Adds header

   #ToDoList.jsx
    sends props to ToDoItem by map function

   #ToDoItem.jsx
    If is editing is true, then show input box and save button otherwise show complete button,edit and delete.

    To run:
    npm run dev

    Screenshots:
    ![alt text](<Screenshot (77).png>)



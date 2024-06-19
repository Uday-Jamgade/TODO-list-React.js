import TodoHeading from "./assets/todoheading"
import AddTodo from "./assets/AddTodo"
import TodoItems from "./assets/TodoItems";
import WelcomeMessage from "./assets/WelcomeMessage";
import { useState } from "react"
import "./App.css";



function App(){

const [ todoItems ,setTodoItems]= useState([]);


const handlNewItem=( itemName , itemDueDate)=>{
  console.log(`new name;${itemName} date: ${itemDueDate}`);
  const newTodoItems = [
    ...todoItems,
    {
      name:itemName , dueDate: itemDueDate
    },
  ];
  setTodoItems(newTodoItems);
};

const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter ((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
};


  return (
    <>
    <div  className="contaner">
    <TodoHeading></TodoHeading>
  
      
      <AddTodo onNewItem={handlNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

    <TodoItems todoItems={todoItems}  onDeleteClick={handleDeleteItem} > </TodoItems>

      </div>
    

    </>
  );
};

export default App

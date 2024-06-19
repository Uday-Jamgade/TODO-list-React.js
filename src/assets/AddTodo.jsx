import { useState } from "react";

function AddTodo({ onNewItem}){
    const [todoName,setTodoName]=useState();
    const [dueDate, setDueDate]=useState();

    const handlNameChange=(event)=>{
        setTodoName(event.target.value);
    }
    
    const handlDateChange=(event)=>{
        setDueDate(event.target.value);
    }

   const handlAddButtonClicked=()=>{
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
}


    return (
        <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="enter todo " value={todoName}  onChange={handlNameChange} />
          </div>
          <div class="col-4">
            <input type="date" value={dueDate} onChange={handlDateChange}/>
          </div>
          <div class="col-2">
          <button type="button"  class="btn btn-success" onClick={handlAddButtonClicked}>Add </button>
          </div>
        </div>
      </div>
    );
}

export default AddTodo;
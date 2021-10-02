import { useState } from "react";
import del from "../src/assets/del.png";
import edit from "../src/assets/edit.png";

const App = () => {
  const [todos, updateTodo] = useState([]);

  var inputValue = "";
  const onInputChange = (event) => {
    inputValue = event.target.value;
  };

  const addTodo = () => {
    updateTodo([...todos, inputValue]);
    // var input.target.value=""
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodo(newTodos);
  };
  const editTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = prompt("");

    updateTodo(newTodos);
    console.log(index);
  };
  // const editTodo=(index, event)=>{
  //   const newTodos=[...todos];
  //   newTodos[index]=event .target.value
  //   if ( event .target.value=== false){
  //     event .target.value=true
  //   }
  // }
  const delAll = () => {
    const newTodos = [];
    updateTodo(newTodos);
  };

  const items = todos.map((todos, index) => (

    <li className="list-group-item d-flex justify-content-between">
      {todos} {"  "}
      <p><button className="btn btn-outline-success mx-20 px-20" onClick={() => { editTodo(index);  }} >{" "}<img src={edit} /> </button>
      <button className="btn btn-outline-danger  mx-20 px-20" onClick={() => {removeTodo(index);  }} > <img src={del} /></button>
    </p>
    </li>
    
  ));

  return (
    <div className="container  ">
      <br />
      <br />
      <br />
      <div className=" row justify-content-md-center">
        <div className="col-md-auto">
          <h1>
            <b>Todo App</b>
          </h1>
      
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Add Todo" onChange={onInputChange} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-success" type="button" onClick={addTodo}>Add</button>
  </div>
</div>
          <ul className="list-group list-group-flush">{items}</ul>
        <br />
          <br />
          <br />
          <div className="d-grid gap-2">
            <button variant="secondary" size="lg" className="btn btn-outline-danger" onClick={delAll}>
              {" "}
              Delete All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

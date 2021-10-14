import { useState } from "react";
import del from "../src/assets/del.png";
import edit from "../src/assets/edit.png";

import Input from "./components/input";
import Button from "./components/button";
import Delall from "./components/delall"
import Edit from "./components/edit";
// import Item from "./components/item";
// import list from "./components/list"


const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, updateTodo] = useState([]);
  const [editInd, setEditInd] = useState("10000000");
  const [editVal, setEditVal] = useState("");
  const [isLoggedIn, setLogginStatus] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userIn, setUserIn] = useState("");
  const [passIn, setPassIn] = useState("");


  const add=() =>{
    
    const items={
      user:user,
      pass:pass
    }
    if (localStorage.getItem('data')==null){
      localStorage.setItem('data',JSON.stringify([items]))
    }
    else{

      const old_val=JSON.parse(localStorage.getItem('data'))
    
      old_val.push(items)
      localStorage.setItem('data',JSON.stringify(old_val))
    }

  }


  const get=()=>{
    const item={
      user:userIn,
      pass:passIn
    }
    let arr =JSON.parse(localStorage.getItem('data'))
    // Array.prototype.find(arr==item)
    console.log(arr)
   for (let i=0 ;i < arr.length; i++){
    if(arr[i].user == item.user && arr[i].pass == item.pass){
      setLogginStatus(true);
      setUserIn('');
      setPassIn('')
      console.log('user found')
    }
   }
   
  }



  const logout = () => {
    setLogginStatus(false);
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      text: inputValue,
      isCompleted: false
    }}

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodo(newTodos);
  };
  const editTodo = (index, todos) => {
    setEditInd(index);
    setEditVal(todos);
  };

  const delAll = () => {
    const newTodos = [];
    updateTodo(newTodos);
  };

  const updateTodos = (index, val) => {
    const newTodos = [...todos];
    newTodos[index] = val;
    updateTodo(newTodos);
    setEditInd("10000");
    setEditVal("");
  };
  const markAsComplete = (index) => {
    const newTodos = [...todos];
    const oldValue = newTodos[index].isCompleted;
    newTodos[index].isCompleted = !oldValue
    updateTodo(newTodos)
  }

  const items = todos.map((todos, index) =>
    editInd === index ? (

      <Edit editVal={editVal} edit={edit} index={index}  setEditVal={setEditVal} updateTodos={updateTodos} />
    ) : (
      <li className="list-group-item d-flex justify-content-between">
        {todos} {"  "}
        <p>
          <button
            className="btn btn-outline-success mx-20 px-20"
            onClick={() => {
              editTodo(index, todos);
            }}
          >
            {" "}
            <img src={edit} />{" "}
          </button>
          <button
            className="btn btn-outline-danger  mx-20 px-20"
            onClick={() => {
              removeTodo(index);
            }}
          >
            {" "}
            <img src={del} />
          </button>
        </p>
      </li>
      
    )
  );
  const completedStyle = { textDecoration: "line-through" }
  const style = {}  
  return (
    <div className="container  ">
      <br />
      <br />
      <br />
      <div className=" row justify-content-md-center">
        <div className="col-md-auto">
          <input type ="text" placeholder="Username" onChange={(e)=>{setUser(e.target.value)}}/><br/>
          <input type ="text"  placeholder="Password" onChange={(e)=>{setPass(e.target.value)}}/><br/>
          <button onClick={add}>SignUp</button><hr/>
          <input type text placeholder="Username" value={userIn} onChange={(e)=>{setUserIn(e.target.value)}}/><br/>
          <input type text placeholder="Password" value={passIn} onChange={(e)=>{setPassIn(e.target.value)}}/><br/>
          <button onClick={get}>SignIn</button>
          <button onClick={isLoggedIn ? logout : login}>
            {isLoggedIn === true ? "Logout" : "Login"}
          </button>
          {isLoggedIn 
          ? 
          <div>
          <h1>
            <b>Todo App</b>
          </h1>

          <div class="input-group mb-3">
            <Input onInputChange={onInputChange} inputValue={inputValue} />
            <div class="input-group-append">
            <Button addTodo={addTodo} />
            </div>
          </div>
          <p style={ todo.isCompleted ? completedStyle : style}>
      <span style={{ color: 'lightgray' ,marginLeft: 20, marginRight: 20}}>{index  + 1}</span>
      <span onClick={() => { markAsComplete(index)}}>{todo.text}</span>
          <ul className="list-group list-group-flush">{items}</ul></p>
          <br />
          <br />
          <br />
          <div className="d-grid gap-2">
         <Delall delAll={delAll}/>
          </div>
          </div>
          : 
          <div>Please Login in</div>}
        </div>
      </div>
    </div>
  );
        
};

export default App;

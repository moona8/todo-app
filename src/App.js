import { useState } from "react";
import del from "../src/assets/del.png";
import edit from "../src/assets/edit.png";

import Input from "./components/input";
import Button from "./components/button";
import Delall from "./components/delall"

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
    const items=[{
      user:user,
      pass:pass
    }]
    // const arr=[items]
    const data =JSON.stringify(items)
    localStorage.setItem("data",data)
  }
  const get=()=>{
  const getData=localStorage.getItem("data")
  console.log(JSON.parse(getData))
  }

  const login = () => {
    setLogginStatus(true);
  };

  const logout = () => {
    setLogginStatus(false);
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    updateTodo([...todos, inputValue]);
    setInputValue("");
  };

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

  const items = todos.map((todos, index) =>
    editInd === index ? (
      <li>
        <input
          alt=""
          value={editVal}
          onChange={(e) => setEditVal(e.target.value)}
        />
        <button
          className="btn btn-outline-success mx-20 px-20"
          onClick={() => {
            updateTodos(index, editVal);
          }}
        >
          {" "}
          <img alt="" src={edit} />{" "}
        </button>
      </li>
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
          <input type text placeholder="Username" onChange={(e)=>{setUserIn(e.target.value)}}/><br/>
          <input type text placeholder="Password" onChange={(e)=>{setPassIn(e.target.value)}}/><br/>
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
          <ul className="list-group list-group-flush">{items}</ul>
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

const Button=({addTodo})=>{
    return    <button
    class="btn btn-outline-success"
    type="button"
    onClick={addTodo}
  >
    Add
  </button>
}
export default Button

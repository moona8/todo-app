const Edit=({updateTodos,index,edit ,editVal, setEditVal })=>{

   return <li>
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
}
export default Edit;
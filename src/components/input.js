const Input=({inputValue, onInputChange})=>{
    return <input
    required
    type="text"
    class="form-control"
    placeholder="Add Todo"
    onChange={onInputChange}
    value={inputValue}
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  />
}
export default Input
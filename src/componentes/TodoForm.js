import React, { useState } from "react";


const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === "") {
      setError(true)
      return;
    }else{
      props.addTodo(input)
      setInput("")
      setError(false)
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Añadir tarea..."
        
      />
      
      <button placeholder="Add Task" type="submit" className="todo-button">Add Task</button>
    {error && <p id="p3">campo vacio</p>}
    </form>
  );
}

export default TodoForm

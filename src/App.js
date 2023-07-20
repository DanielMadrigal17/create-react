import React, { useState } from "react";
import "./App.css";
import TodoForm from "./componentes/TodoForm";
import TodoItem from "./componentes/TodoItem";


function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
    
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const calcularCompletados = () => {
    let contador = 0;
    todos.forEach((task) => {
      if (task.completed) {
        contador += 1;
      }
    });
    return contador;
  };
  const completed = calcularCompletados();


  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="mover">
      <p id="text">Tareas Completas : </p>
      <p id="p2" >{completed}</p>
      </div>
      <TodoForm addTodo={addTodo} />
    
      {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo}  todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}
export default App;
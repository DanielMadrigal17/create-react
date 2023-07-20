import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"


 const TodoItem = (props)=>{
    const { todo, removeTodo, completeTodo, } = props
    console.log(todo)
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="iconsContainer">
                <RiDeleteBin6Line style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
                <input id='check' type='checkbox' onClick={() => completeTodo(todo.id)}/>
                


            </div>
        </div>
    )
}

export default TodoItem



import React from 'react'
import '../App.css'

import DeleteTodo from './DeleteTodo';

const Todolist = ({todos, setTodos}) => {

  const toggleTodo = (todo) =>{
    const updatedTodos = todos.map((td) => {
      return td.id === todo.id
       ? {
        ...td,
        done: !td.done 
      } 
      : td
  });
    setTodos(updatedTodos);
  }
 

  // if(!todos.lenght ) {
  //   return <h3>Empty Array</h3>
  // }
 
  return (
    <ul> 
        {todos.map((todo) =>(
         <li 
          onDoubleClick={() => toggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : "",
            backgroundColor: todo.done ? "rgb(175, 124, 124)" : "",
            color: todo.done ? "white" : ""
          }}
          key={todo.id}>
            {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos}/>
        </li>
        ))}
    
    </ul>
  )
}

export default Todolist
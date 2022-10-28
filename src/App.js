import React, {useState, useEffect} from 'react'

import "./App.css"
import Todolist from './components/Todolist'
import AddTodo from './components/AddTodo';


const App = () => {
const [todos, setTodos] = useState(
  JSON.parse(localStorage.getItem('todo-list'))
)

useEffect(() => {
  localStorage.setItem('todo-list', JSON.stringify(todos));

}, [todos]);

  return (
    <div className='todo'>
       <h1> Todo List </h1>
      <AddTodo setTodos={setTodos} />
      <Todolist todos={todos}  setTodos={setTodos}/>
    </div>
  )
}

export default App

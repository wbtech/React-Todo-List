import React,{useRef} from 'react'
import  '../App.css'


const AddTodo = ({ setTodos }) => {

const inputRef = useRef()

    const submitTodo = (e) =>{
        e.preventDefault();
        const text = e.target.elements.addtodo.value;
        const todo = {
            id: Math.random(),
            text,
            done: false
        };
        setTodos(prevTodos =>{
            return prevTodos.concat(todo);
        })

        //to clear the current input value
        inputRef.current.value = "";
        localStorage.setItem('todos', JSON.stringify());
       
    }
console.log(Math.random()+1)

  return (
    <div className='todoform' style={{
        padding: ".5rem"
    }}>
        <form onSubmit={submitTodo}>
            <input name='addtodo' placeholder='Add todo' ref={inputRef} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo
import React from 'react'

const DeleteTodo = ({todo, setTodos}) => {

    const deletetodo = () => {
        const confirmed = window.confirm("Do you want to delete this");
        if (confirmed) {
            setTodos((prevTodos) => {
                return prevTodos.filter((td) => td.id !== todo.id )
             
            });
        }
     }

  return (
    <span 
    onClick={deletetodo}
    role='button' 
    style={{
        color: 'red',
        padding: 1,
        fontWeight:"bold",
        marginLeft: 15,
        cursor: "pointer",
        position: 'relative',
        textAlign: 'right'
        
    }}
    >X</span>
  );
}

export default DeleteTodo
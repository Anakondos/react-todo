import React from 'react';


const AddTodoForm = () => {
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.value;
        console.log(event.target.value);
        event.target.reset();
    }


    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title"></input>
            <button>Add</button>
        </form>
    );
} 

export default AddTodoForm; 
import React from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './TodoListItem.module.css';

function AddTodoForm ({onAddTodo}) {
    
    //  create STATE for AddTodoForm component
    const [todoTitle, setTodoTitle] = React.useState('');

    //  create func to udate STATE in AddTodoForm component
    const handleTitleChange = (event) => {

            const newTodoTitle = event.target.value;
            setTodoTitle(newTodoTitle);
    }
    
    //  create CallBack for addTodo function to add new items in App() STATE
    const handleAddTodo = (event) => {
        event.preventDefault();

        onAddTodo({
            title: todoTitle,
            id: Date.now(),
        });

     
        
        // Set state varable to empty (clean input field)
        setTodoTitle("");
    }


    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel  
               id="todoTitle" 
               name="title" 
                value={todoTitle} 
                onChange={handleTitleChange}
            > 
            <span className={styles.titleInput}>Title</span>
            </InputWithLabel>
            <button>Add</button>
        </form>
    );
} 

export default AddTodoForm; 
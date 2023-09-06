import React from 'react';
import styles from './TodoListItem.module.css';

const TodoListItem = ({item, onRemoveTodo}) => {

const handleRemoveTodo = () =>{
    onRemoveTodo(item.id);
}

    return (
        <li className='styles.ListItem'>
            {item.title}
            <button onClick={handleRemoveTodo}>Remove</button>
        </li>
    );

}

export default TodoListItem;
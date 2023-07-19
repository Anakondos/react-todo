import React from 'react';

const TodoListItem = ({item, onRemoveTodo}) => {

const handleRemoveTodo = () =>{
    onRemoveTodo(item.id);
}

    return (
        <li>
            {item.title}
            <button onClick={handleRemoveTodo}>Remove</button>
        </li>
    );

}

export default TodoListItem;
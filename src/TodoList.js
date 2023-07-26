import React from 'react';

import TodoListItem from './TodoListItem';



function TodoList ({todoList, onRemoveTodo}) {
 
  

  return (
    <ul>   
      {todoList.map(function(item){
        const {id, title} = item;
        console.log(id,title)
        return (<TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo}/>);
      })}
    </ul>
  );
}

export default TodoList;
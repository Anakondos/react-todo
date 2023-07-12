import React from 'react';

import TodoListItem from './TodoListItem';



function TodoList ({todoList}) {
 
  const {id, title} = todoList;

  return (
    <ul>   
      {todoList.map(function(item){
        return (<TodoListItem key={id} item={item} />);
      })}
    </ul>
  );
}

export default TodoList;
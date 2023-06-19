import React from 'react';

import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1,
      title: "Complete assigment" 
    },
    {
      id: 2, 
      title: "submit assigment"
    },
    {
      id: 3,
      title: "Start assignment"
    }
  ];
const TodoList = (props) => {

    return (
        <ul>
          {todoList.map(function(item){
              return (
                <TodoListItem key={item.id} item={item} />
              );

            })
          }
        </ul>
    );
}

export default TodoList;
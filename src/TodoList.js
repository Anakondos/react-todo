import React from 'react';

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
const TodoList = () => {

    return (
        <ul>
          {todoList.map(function(item){
              return <li key = {item.id}>
                {item.title}
                </li>
            })
          }
        </ul>
    );
}

export default TodoList;
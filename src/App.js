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

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <ul>
          {
            todoList.map(function(item){
              return <li key = {item.id}>
                {item.title}
                </li>
            })
          }
      </ul>
    </div>
  );
}

export default App;

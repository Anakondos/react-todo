import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {

 
    const [newTodo, setNewTodo] = React.useState('');
 
    /*1.4 new state variable named todoList 
    with setter setTodoList and default value of an empty Array*/
    const [todoList, setTodoList] = React.useState([]);
    
    // const handleSearch = (event) => {
    //   setTodoList(event.target.value);
    // }
    
  return (
    <div>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
        <p>Value of NewTodo = {newTodo}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

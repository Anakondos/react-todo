import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {

 //   create state for App with blank Array and 'todoList' variable and setter 'setTodoList'
    const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList'))|| []
    );
    

    React.useEffect(() => {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }, [todoList]);
  
 //   update STATE function 
    const addTodo = (newTodo) => {

        setTodoList([...todoList, newTodo]);
    } 

  return (
    <div>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo}/>
        
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

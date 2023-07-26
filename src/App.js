import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

// function useSemiPersistentState() {
  
//   const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList'))|| []
//   );

//   React.useEffect(() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList]
// }



function App() {

 //   create state for App with blank Array and 'todoList' variable and setter 'setTodoList'
    
//  const [todoList, setTodoList] = useSemiPersistentState();

      const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList'))|| []
  );

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);
  
 //   update STATE function 
    const addTodo = (newTodo) => {

        setTodoList([...todoList, newTodo]);
    } 

    const removeTodo = (id) => {
     
      const newListItem = todoList.filter(
        (TodoListItem) => id !== TodoListItem.id
      );
         
      setTodoList(newListItem);
    }

  return (
    <>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo}/>
        
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}

export default App;

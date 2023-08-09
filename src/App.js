import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {

 //   create state for App with blank Array and 'todoList' variable and setter 'setTodoList'

   
 const [todoList, setTodoList] = React.useState([]);
 const [isLoading, setIsLoading] = React.useState(true);

 React.useEffect(
      
      ()=>{getAsyncTodoList().then((result)=>{
          setTodoList(result.data.todoList);
          setIsLoading(false);
          });
      },[]);

    


//--handler function--
  const getAsyncTodoList = () => 

  new Promise((resolve, reject) => 
    setTimeout(
      () => resolve({data: {todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [] } }), 
        2000
        )
    
  )


    React.useEffect(() => {
    
      if (!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }
      
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
    {isLoading?<p>...isLoading</p>:<p>
    
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo}/>
        
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      </p>}
    </>
  );
}

export default App;

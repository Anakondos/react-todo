import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styles from './TodoListItem.module.css';

function App() {

 //   create state for App with blank Array and 'todoList' variable and setter 'setTodoList'

   
 const [todoList, setTodoList] = React.useState([]);
 const [isLoading, setIsLoading] = React.useState(true);

 const fetchData = async() => {

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
    }
  }
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
  
  console.log(url);
  console.log("testing",options);

  
  try {
    
    
    const response = await fetch(url, options);
      
    console.log("RESPONSE",response);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();

      console.log("DATA",data);

      const todos = data.records.map((todo) => {

        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }
        return newTodo
      });
        
      setTodoList(todos);
      setIsLoading(false);
     
      // console.log(data);
      return data;
      
  }
  catch{
    console.log("error message Nastia")
  };

}
const postData = async(newTodo) => {

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(
      {
        fields: {
          title: newTodo.title
        }
      }
    )

  }
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
  
  console.log(url);
  console.log(options);


  try {
    
    
    const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
             throw new Error(message);
      }
      const data = await response.json();
          const newTodo = {
          id: data.id,
          title: data.fields.title
        }
      setTodoList([...todoList, newTodo]);
      setIsLoading(false);
    
      return data;

  }
  catch{
    console.log("error message")
  };

}

 React.useEffect(
      ()=>{
        fetchData();
      },
      []);


    React.useEffect(() => {
    
      if (!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }
      
  }, [todoList]);


  
 //   add new item function 
    const addTodo = (newTodo) => {
        
        postData(newTodo);
    } 

    const removeTodo = (id) => {
     
      const newListItem = todoList.filter(
        (TodoListItem) => id !== TodoListItem.id
      );
         
      setTodoList(newListItem);
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.headlinePrimary}>My App</h1>
      <h2 className={styles.google}>Test Google font</h2>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={

          <div>
          {isLoading?<p>...isLoading</p>:<div>


            <h1>Todo list</h1>
            <AddTodoForm onAddTodo={addTodo}/>
              
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/></div>}
            </div>
        } />
    
      <Route path="/new" element={<h1>New Todo List</h1>} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

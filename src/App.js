import React, {useState,useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList.';
import './App.css';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilterTodos] = useState([]);

  useEffect( () => {

    filterHandler()


  },[todos,status]);


  const filterHandler = () => {

    switch (status){

      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break;

    }
  }

  const saveLocalTodos = ( ) => {
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  const getLocalTodos = ( ) => {
    if (localStorage.grtItem("todos") === null){

      localStorage.setItem("todos",JSON.stringify([]));

    } else {
      let todolocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todolocal);
    }
  };
  
  



  return (
    <div className="App">
      <header>
         <h1>Your's Todo List</h1>
      </header>
      <Form inputText = {inputText} setInputText={setInputText} todos = {todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos = {setTodos} filteredTodos = {filteredTodos}/>
    </div>
  );
}

export default App;

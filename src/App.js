import "./styles.css";
import TodoApp from "./components/TodoApp";
import TodoList from "./components/TodoList";
import Welcome from "./components/Welcome";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "./contexts/TodoContext";
export default function App() {
  const {isLoggedIn, setIsLoggedIn, setTodos,setUser} = useContext(TodoContext)
  useEffect(() => {
    if(isLoggedIn.status){
      const temp = JSON.parse(localStorage.getItem(isLoggedIn.as)) || []
      setTodos(temp)
      setUser(isLoggedIn.as)
    }
  }, [])
  return (
    <div className="container">
      {isLoggedIn.status ? (
        <div className="layout">
          <TodoApp />
          <TodoList />
        </div>
      ) : (
      <Welcome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [todos, setTodos] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || {status: false, as: '' })
  useEffect(() => {
    if(user)
      localStorage.setItem(user, JSON.stringify(todos))
  },[todos])
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
  }, [isLoggedIn])
  const handleComplete = (id) => {
    const temp = todos.map((todo, idx) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    // setTodos(temmp)
    arrangeTodos(temp)

  }
  function arrangeTodos(temp){
    const completed = temp.filter(todo => todo.completed === true)
    const inComplete = temp.filter(todo => todo.completed === false)
    setTodos(inComplete.concat(completed))
  }
  return (
    <TodoContext.Provider value={{ setTodos, todos, handleComplete, user, setUser, isLoggedIn, setIsLoggedIn, arrangeTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

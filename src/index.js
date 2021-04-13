import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { TodoProvider } from "./contexts/TodoContext";
import App from "./App";

const rootElement = document.getElementById("root");
// let user = prompt("Enter your name")
// while(user === null)
//   user = prompt("Enter your name")

// const activeSession = JSON.parse(localStorage.getItem('activeSession')) || [];
// if(!localStorage.getItem(user)){
//   localStorage.setItem(user, JSON.stringify([]))
//   if(!activeSession.includes(user)){
//     localStorage.setItem('activeSession', JSON.stringify([...activeSession, user]))
//   }
// }
// const isLoggedIn = false
ReactDOM.render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
  rootElement
);

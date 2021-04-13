import { useContext, useState } from "react";
import ColorChooser from "./ColorChooser";
import Dropdown from "./Dropdown";
import { TodoContext } from "../contexts/TodoContext";
import Header from "./Header";
export default function TodoApp() {
  const { todos, setTodos, arrangeTodos } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const [color, setColor] = useState("");
  const [selected, setSelected] = useState("Choose one");
  const [error, setError] = useState('')
  function clearState() {
    setTodo("");
    setColor("");
    setSelected("Choose One");
    setError('')
    document.querySelectorAll(".color-button").forEach((btn) => {
      btn.classList.remove("active");
    });
  }
  function verifyData() {
    if(todo.length > 50) {
      setError('Todo should not be greater than 50 characters')
      return false
    }
    else if (todo !== "" && color !== "" && selected !== "Choose one") {
      return true;
    } 
    else {
      return false;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (verifyData()) {
      const temp = {
        id: Math.floor(Math.random() * 10000),
        todo,
        color,
        selected,
        completed: false
      };

      arrangeTodos([...todos, temp]) 
      clearState();
    } else return;
  }
  return (
    <div className="todo-container">
      <Header text="ADD YOUR TODO'S FOR TODAY" showInfo={false} />
      <form id="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="Enter Todo [50 chars]"
          autoComplete="off"
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        {error && <span className="error">{error}</span>}
        <ColorChooser setColor={setColor} />
        <Dropdown selected={selected} setSelected={setSelected} />
        <button className="btn-submit">ADD TODO</button>
      </form>
    </div>
  );
}

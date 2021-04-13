import { useContext, useState } from "react";
import ColorChooser from "./ColorChooser";
import Dropdown from "./Dropdown";
import { TodoContext } from "../contexts/TodoContext";
import Header from "./Header";
export default function TodoApp() {
  const { todos, setTodos } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const [color, setColor] = useState("");
  const [selected, setSelected] = useState("Choose one");
  function clearState() {
    setTodo("");
    setColor("");
    setSelected("Choose One");
    document.querySelectorAll(".color-button").forEach((btn) => {
      btn.classList.remove("active");
    });
  }
  function verifyData() {
    if (todo !== "" && color !== "" && selected !== "Choose One") {
      return true;
    } else {
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
      setTodos([...todos, temp]);
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
          placeholder="enter todo"
          autoComplete="off"
          onChange={(e) => setTodo(e.target.value)}
        />
        <ColorChooser setColor={setColor} />
        <Dropdown selected={selected} setSelected={setSelected} />
        <button className="btn-submit">ADD TODO</button>
      </form>
    </div>
  );
}

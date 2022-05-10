import React, { useState, useRef } from "react";

const UseRef = () => {
  const [todos, setTodos] = useState([]);
  const inputElement = useRef();

  function addTodo(todo) {
    const input = inputElement.current.value;
    if (input.length === 0 || input === "") {
      return;
    }

    setTodos([...todos, todo]);
    resetInput();
  }

  function resetInput() {
    inputElement.current.value = "";
    inputElement.current.focus();
  }

  return (
    <>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <form onClick={(event) => event.preventDefault()}>
          <input ref={inputElement} />
          <button onClick={() => addTodo(inputElement.current.value)}>
            Adicionar Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default UseRef;

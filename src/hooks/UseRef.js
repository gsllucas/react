import React, { useState, useRef } from "react";

const UseRef = () => {
  const [todos, setTodos] = useState([]);
  const inputElement = useRef();

  function addTodo(todo) {
    setTodos([...todos, todo]);
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

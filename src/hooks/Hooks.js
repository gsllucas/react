import React, { useState } from "react";

export function ReactHooks() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state);
  }

  return (
    <div>
      <button onClick={handleClick}>{state ? "Ativo" : "Inativo"}</button>
    </div>
  );
}

export function Counter() {
  let [counter, setCounter] = useState(0);

  const buttonStyle = { padding: "12px 24px" };

  return (
    <div>
      <button style={buttonStyle} onClick={() => setCounter(++counter)}>
        {counter}
      </button>
      <button style={buttonStyle} onClick={() => setCounter(0)}>
        Resetar
      </button>
    </div>
  );
}

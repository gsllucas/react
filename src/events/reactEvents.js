import React from "react";

function handleClick(event) {
  console.log(event);
}

export default function Button() {
  return <button onClick={handleClick}>Click here!</button>;
}

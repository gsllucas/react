import React from "react";

const listOfFilms = ["Before Sunrise", "Before Sunset", "Before Midnight"];

export default function ListOfFilms() {
  return (
    <ul>
      {listOfFilms.map((film) => (
        <li key={film}>{film}</li>
      ))}
    </ul>
  );
}

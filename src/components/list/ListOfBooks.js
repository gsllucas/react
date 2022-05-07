import React from "react";

const books = [
  { name: "Game of Thrones", year: 1996 },
  { name: "A Clash of Kings", year: 1998 },
  { name: "Storm of Swords", year: 2000 },
];

export default function ListOfBooks() {
  return (
    <ul>
      {books.map(({ name, year }) => (
        <li key={name}>
          {name}, {year}
        </li>
      ))}
    </ul>
  );
}

import React from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "R$ 2000",
    colors: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    name: "Notebook",
    price: "R$ 3000",
    colors: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    name: "Tablet",
    price: "R$ 1500",
    colors: ["#365069", "#47c1c8", "#f95786"],
  },
];

export default function ProductsOver1500() {
  const filteredData = products.filter(
    (product) => Number(product.price.replace("R$ ", "")) > 1500
  );

  return filteredData.map(({ id, name, price, colors }) => (
    <div key={id}>
      <h1>{name}</h1>
      <p>Preço: {price}</p>
      <ul>
        {colors.map((color) => (
          <li key={color} style={{ backgroundColor: color, color: "white" }}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  ));
}

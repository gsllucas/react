import React from "react";

const client01 = {
  client: "Luana",
  age: 27,
  purchases: [
    { product: "Notebook", price: "R$2500" },
    { product: "Geladeira", price: "R$3000" },
    { product: "Smartphone", price: "R$1500" },
  ],
  isActive: true,
};

const client02 = {
  client: "Mario",
  age: 31,
  purchases: [
    { product: "Notebook", price: "R$5500" },
    { product: "Geladeira", price: "R$5000" },
    { product: "Smartphone", price: "R$4500" },
  ],
  isActive: false,
};

function calculateTotalExpense(purchases) {
  return purchases.reduce((acc, purchase) => {
    const formattedPrice = Number(purchase.price.replace("R$", ""));
    return (acc += formattedPrice);
  }, 0);
}

const App = () => {
  const dados = client02;
  const { client, age, purchases, isActive } = dados;
  const totalExpend = calculateTotalExpense(purchases);

  return (
    <React.Fragment>
      <div>
        <p>Name: {client}</p>
        <p>Age: {age}</p>
        <p>
          Situation:{" "}
          <span style={{ color: isActive ? "green" : "red" }}>
            {isActive ? "Active" : "Inactive"}
          </span>
        </p>
        <p>Total Expend: {totalExpend}</p>
        {totalExpend > 10000 && <p>You're expending too much.</p>}
      </div>
    </React.Fragment>
  );
};

export default App;

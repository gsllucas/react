import React, { Fragment, useState } from "react";
import ListOfFilms from "./components/list/ListOfFilms";
import ListOfBooks from "./components/list/ListOfBooks";
import ProductsOver1500 from "./components/products/Products";
import Button from "./events/reactEvents";
import {
  ChildrenComponent,
  PropsComponent,
  SpreadPropsComponent,
} from "./props/Props";
import { Counter, ReactHooks } from "./hooks/Hooks";
import { HooksData } from "./hooks/HooksData";
import { UseEffectHook, UseEffectExercises } from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./hooks/UseCallback";
import UseContext from "./hooks/UseContext";
import GlobalContext from "./hooks/GlobalContext";
import useLocalStorage from "./custom-hooks/UseCustomHooks";

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
  const [isVisible, setIsVisible] = useState(true);

  const dados = client02;
  const { client, age, purchases, isActive } = dados;
  const totalExpend = calculateTotalExpense(purchases);

  const [favorite, setFavorite] = useLocalStorage("product", "Nenhum dado");

  function setPreferenceOnStorage(favorite) {
    setFavorite(favorite);
  }

  return (
    <GlobalContext>
      <p>Favorite: {favorite}</p>
      <button onClick={() => setPreferenceOnStorage("Notebook")}>
        Notebook
      </button>
      <button onClick={() => setPreferenceOnStorage("Computador")}>
        Computador
      </button>
    </GlobalContext>
  );

  return (
    <GlobalContext>
      <div>
        <UseEffectExercises />
      </div>
      <br></br>
      <div>
        <UseRef />
        <UseMemo />
      </div>
      <div>
        <UseCallback />
      </div>
      <div>
        <UseContext />
      </div>
      <div>
        <button></button>
      </div>
    </GlobalContext>
  );

  return (
    <Fragment>
      {isVisible && <UseEffectHook />}
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>toogle</button>
        <HooksData />
      </div>
    </Fragment>
  );

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
      <div>
        <ListOfFilms />
        <ListOfBooks />
        <ProductsOver1500 />
        <Button />
        <PropsComponent
          text="Esse é um paragrafo utilizando um component com props no react"
          size="40px"
          color="#38b88b"
        />
        <div style={{ display: "flex" }}>
          <ChildrenComponent>
            <h1>Here goes children!</h1>
          </ChildrenComponent>
          <ChildrenComponent>
            <h1>Here goes children!</h1>
          </ChildrenComponent>
          <ChildrenComponent>
            <h1>Here goes children!</h1>
          </ChildrenComponent>
        </div>
        <SpreadPropsComponent label="Seu nome" type="name" required />
        <SpreadPropsComponent label="Sua senha" type="password" />
      </div>
      <div>
        <ReactHooks />
      </div>
      <div style={{ margin: "16px 0" }}>
        <Counter />
      </div>
      <div>
        <HooksData />
      </div>
    </React.Fragment>
  );
};

export default App;

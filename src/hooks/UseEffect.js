import React, { useEffect, useState } from "react";
import { APP_URL } from "../config/constants/appUrls";
import Product from "./Product";

export const UseEffectHook = () => {
  let [counter, setCounter] = React.useState(0);

  useEffect(() => {
    document.title = counter;
    return () => (document.title = "React Application");
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(++counter)}>{counter}</button>
    </div>
  );
};

async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

function setPreferenceOnStorage(productPreference) {
  localStorage.setItem("product", productPreference);
}

function getPreferenceOnStorage(productPreference) {
  return localStorage.getItem(productPreference);
}

export const UseEffectExercises = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const preferenceProductName = getPreferenceOnStorage("product");

    if (!!preferenceProductName) {
      getProduct(preferenceProductName);
    }
  }, []);

  async function getProduct(productName) {
    try {
      const completeUrl = `${APP_URL}/${productName}`;
      const productDatasource = await fetchData(completeUrl);
      setProduct(productDatasource);
      setPreferenceOnStorage(productDatasource.nome.toLowerCase());
    } catch (e) {
      console.log("Error", e);
    }
  }

  return (
    <>
      <h1>Preferência: {product && product.nome}</h1>
      <div>
        <button
          style={{ padding: "12px 24px", margin: "12px" }}
          onClick={() => getProduct("notebook")}
        >
          Notebook
        </button>
        <button
          style={{ padding: "12px 24px", margin: "12px" }}
          onClick={() => getProduct("smartphone")}
        >
          Smartphone
        </button>
      </div>
      <div>{product && <Product product={product} />}</div>
    </>
  );
};

import React, { useState } from "react";
import Product from "./Product";

const baseUrl = "https://ranekapi.origamid.dev/json/api/produto";

async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

export const HooksData = () => {
  const [product, setProduct] = useState({});
  let [loading, setLoading] = useState(false);

  async function getProductDescription(product) {
    setLoading(true);
    const completeUrl = `${baseUrl}/${product}`;
    const productDatasource = await fetchData(completeUrl);
    console.log(productDatasource);
    setProduct(productDatasource);
    setLoading(false);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={() => getProductDescription("notebook")}>
          Notebook
        </button>
        <button onClick={() => getProductDescription("smartphone")}>
          Smartphone
        </button>
        <button onClick={() => getProductDescription("tablet")}>Tablet</button>
      </div>
      <div>
        {loading
          ? "Carregando..."
          : !loading && (
              <Product
                name={product.nome}
                price={product.preco}
                photoUrls={product.fotos}
              />
            )}
      </div>
    </>
  );
};

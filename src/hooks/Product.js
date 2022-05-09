import React from "react";

const Product = ({ product }) => {
  const { nome, preco, fotos } = product;

  return (
    <>
      <h1>{nome}</h1>
      <p>{preco}</p>
      <div>
        {fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt="foto"></img>
        ))}
      </div>
    </>
  );
};

export default Product;

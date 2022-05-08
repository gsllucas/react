import React from "react";

const Product = ({ name, price, photoUrls }) => {
  console.log(photoUrls);

  return (
    <>
      <h1>{name}</h1>
      <p>{price}</p>
      <div>
        {photoUrls.map((photo) => (
          <img key={photo} src={photo.src} alt="product"></img>
        ))}
      </div>
    </>
  );
};

export default Product;

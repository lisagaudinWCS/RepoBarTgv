import React from "react";

function Product({ category, name, image, description, price, particularity }) {
  return (
    <div className="listContainer">
      <div className="listcat">
        <h2>{category}</h2>{" "}
      </div>
      <div className="listName">
        <div className="listPrice">
          <img src={image} alt={name} />
        </div>
        <div className="listDescription">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="listUn">
        <div>{price} EUR</div>
        <img src={particularity} alt="BIO / VEGAN" />
      </div>
    </div>
  );
}

export default Product;

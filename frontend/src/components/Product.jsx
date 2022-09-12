import React from "react";
import "./Product.css";

function Product({ category, name, image, description, price, particularity }) {
  return (
    <div className="listProducts">
      <div className="listContainer">
        <div className="listCat">
          <h2>{category}</h2>{" "}
        </div>
        <div className="listName">
          <div className="listPrice">
            <img className="imgProd" src={image} alt={name} />
          </div>
          <div className="listDescription">
            <div className="name">
              <h3>{name}</h3>
            </div>
            <div className="decrip">{description}</div>
          </div>
        </div>
        <div className="listUn">
          <div className="price">{price} EUR</div>
          <img src={particularity} alt="BIO / VEGAN" />
        </div>
      </div>
    </div>
  );
}

export default Product;

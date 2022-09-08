import axios from "axios";
import React, { useState, useEffect } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => response.data)
      .then((data) => setProducts(data));
  };

  useEffect(() => getProducts(), []);
  return (
    <div className="fileProducts">
      <h3 className="catProducts">{products.category_product}</h3>
      <img
        className="imgProducts"
        src={products.image}
        alt={products.decription}
      />
      <h3 className="descripProducts">{products.description}</h3>
      <h3 className="priceProducts">{products.price}</h3>
      <img
        className="partiFood"
        src={products.particularity_food_id}
        alt="Végan ou Bio"
      />
    </div>
  );
}

export default ProductsList;

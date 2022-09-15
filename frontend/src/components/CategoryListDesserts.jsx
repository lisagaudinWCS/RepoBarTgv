import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./ProductList.css";

function CategoryListDesserts() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/categories/4")
      .then((response) => response.data)
      .then((data) => setProducts(data));
  };

  useEffect(() => getProducts(), []);
  return (
    <div className="leon">
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            particularity={product.particularity}
          />
        ))}
    </div>
  );
}

export default CategoryListDesserts;

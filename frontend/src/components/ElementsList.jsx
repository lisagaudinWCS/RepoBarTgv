import axios from "axios";
import { useState, useEffect } from "react";
import Element from "./Element";

export default function ElementsList({ filterNavigation }) {
  const [allProducts, setAllproducts] = useState("");
  const category = [
    "Formules",
    "Plats Froids",
    "Plats Chauds",
    "Desserts",
    "Boissons",
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => response.data)
      .then((data) => setAllproducts(data));
  }, []);

  return (
    <div>
      <h2 className="category-product">
        {filterNavigation > 0
          ? category[filterNavigation - 1]
          : "Tous les produits"}
      </h2>
      <div className="container-all-product">
        {allProducts &&
          allProducts
            .filter((e) =>
              filterNavigation
                ? e.category_id === filterNavigation
                : allProducts
            )
            .map((product) => (
              <Element
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
      </div>
    </div>
  );
}

import axios from "axios";
import { useState, useEffect } from "react";
import Element from "./Element";

export default function ElementsList() {
  const [allProducts, setAllproducts] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => response.data)
      .then((data) => setAllproducts(data));
  }, []);

  return (
    <div>
      <div className="container-all-product">
        {allProducts &&
          allProducts
            .map((product) => (
              <Element
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.categorie_id}
              />
            ))
            .sort((a, b) => a.categorie_id - b.categorie_id)}
      </div>
    </div>
  );
}

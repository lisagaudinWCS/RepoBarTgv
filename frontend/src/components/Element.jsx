import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ShoplistContext from "../context/ShoplistContext";

export default function Element({ id, name, price, image, description }) {
  const { shoplist, setShoplist } = useContext(ShoplistContext);
  useEffect(() => {
    localStorage.setItem("shoplist", JSON.stringify(shoplist));
  }, [shoplist]);

  const [addProductToShoplist, setAddProductToShoplist] = useState(false);

  const [productDetails, setProductDetails] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
      .then((response) => response.data)
      .then((data) => setProductDetails(data));
  }, []);
  function addToShoplist() {
    const currentProductAdded = shoplist.find(
      (product) => product.name === name
    );
    if (currentProductAdded) {
      const cartFilteredCurrentProduct = shoplist.filter(
        (product) => product.name !== name
      );
      setShoplist([
        ...cartFilteredCurrentProduct,
        {
          id,
          name,
          price,
          image,
          description,
          amount: currentProductAdded.amount + 1,
        },
      ]);
    } else {
      setShoplist([
        ...shoplist,
        { id, name, price, description, image, amount: 1 },
      ]);
    }
  }
  function handleAddProduct() {
    setAddProductToShoplist(true);
    addToShoplist(
      productDetails.name,
      productDetails.price,
      productDetails.description,
      productDetails.image
    );
  }

  return (
    <div className="container-element">
      <Link to={`/productdetails/${id}`}>
        <div className="container-image">
          <img className="picture" src={image} alt={name} />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-description">{description}</div>
      </Link>
      <div className="container-price-button">
        <div className="product-price">{price.split(".").join(",")} €</div>

        <button
          type="button"
          className={
            addProductToShoplist
              ? "add-to-shoplist-from-home-hide"
              : "add-to-shoplist-from-home"
          }
          onClick={() => handleAddProduct()}
        >
          +
        </button>
      </div>
    </div>
  );
}

import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import ShoplistContext from "../context/ShoplistContext";
import FavOff from "../assets/favorite-btn-off.png";
import FavOn from "../assets/favorite-btn-on.png";

export default function Element({ id, name, price, image, description }) {
  const { shoplist, setShoplist } = useContext(ShoplistContext);
  const [addProductToShoplist, setAddProductToShoplist] = useState(false);
  // const [productDetails, setProductDetails] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    localStorage.setItem("shoplist", JSON.stringify(shoplist));
  }, [shoplist]);

  function addToShoplist() {
    const currentProductAdded = shoplist.find((product) => product.id === id);
    if (currentProductAdded) {
      const cartFilteredCurrentProduct = shoplist.filter(
        (product) => product.id !== id
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
    addToShoplist(id, name, image, description, price);
  }
  function addFavorite() {
    setIsFavorite(true);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/favorites`, {
        client_id: 1,
        product_id: id,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  }

  function deleteFavorite() {
    setIsFavorite(!isFavorite);
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/favorites/1`, {
      data: {
        product_id: id,
      },
    });
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

        {!isFavorite ? (
          <input
            className="favorite-btn-off"
            type="image"
            src={FavOff}
            alt="favorite unselected"
            onClick={addFavorite}
          />
        ) : (
          <input
            type="image"
            className="favorite-btn-on"
            src={FavOn}
            alt="favorite selected"
            onClick={deleteFavorite}
          />
        )}
      </div>
    </div>
  );
}

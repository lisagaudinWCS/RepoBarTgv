import axios from "axios";
import { useEffect, useState } from "react";

import ShoplistDetails from "../components/ShoplistDetails";

import "./shoplistPage.css";
import "../components/shoplistDetails.css";

export default function ShoplistPage() {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce(
    (acc, product) => acc + product.amount * product.price,
    0
  );

  const handleAmount = (id, amount) => {
    setCart(
      cart.map((product) =>
        product.id === id ? { ...product, amount } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const sendOrder = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/shoplists`, {
        order_number: 105,
        total_price: total,
        status: "crée",
        date: Date(),
        ticket_id: 1,
        cart,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">Ma commande</h1>
      </div>
      <h2 className="shoplist-title">Mon panier</h2>
      {cart &&
        cart.map((element) => (
          <ShoplistDetails
            key={element.id}
            id={element.id}
            name={element.name}
            price={element.price}
            amount={element.amount}
            imageCart={element.image}
            description={element.description}
            handleAmount={handleAmount}
            deleteProduct={deleteProduct}
          />
        ))}
      <div className="box-container-shoplist">
        <div className="total-container">
          <p className="total-order">Total Commande : </p>
          <p className="total-number">{total.toFixed(2)} €</p>
        </div>
      </div>

      <div className="container-button-shop">
        <div>
          <button
            className="validate-button"
            type="button"
            onClick={() => sendOrder()}
          >
            Valider la Commande
          </button>
        </div>
        <div>
          <button
            className="validate-button"
            type="button"
            onClick={() => setCart([])}
          >
            Vider Panier
          </button>
        </div>
      </div>
    </div>
  );
}

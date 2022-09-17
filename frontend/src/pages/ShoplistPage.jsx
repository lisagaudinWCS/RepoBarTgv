import { useEffect, useState } from "react";

import ShoplistDetails from "../components/ShoplistDetails";

import "./shoplistPage.css";

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

  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">Ma commande</h1>
      </div>
      <h2>Mon panier</h2>
      {cart &&
        cart.map((element) => (
          <ShoplistDetails
            key={element.id}
            id={element.id}
            name={element.name}
            price={element.price}
            amount={element.amount}
            handleAmount={handleAmount}
          />
        ))}
      <button type="button" onClick={() => setCart([])}>
        Vider Panier
      </button>
      <div>Total Commande : {total.toFixed(2)} €</div>
    </div>
  );
}

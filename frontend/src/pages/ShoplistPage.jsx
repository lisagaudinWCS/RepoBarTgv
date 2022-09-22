import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TotalOrder from "../components/TotalOrder";
import ShoplistDetails from "../components/ShoplistDetails";

export default function ShoplistPage() {
  const savedShoplist = localStorage.getItem("shoplist");
  const [shoplist, setShoplist] = useState(
    savedShoplist ? JSON.parse(savedShoplist) : []
  );
  useEffect(() => {
    localStorage.setItem("shoplist", JSON.stringify(shoplist));
  }, [shoplist]);

  const navigate = useNavigate();
  // calculer le total de la commande
  const total = shoplist
    .reduce((acc, product) => acc + product.amount * product.price, 0)
    .toFixed(2);
  // ajuster les quantité de chaque produit
  const handleAmount = (id, amount) => {
    setShoplist(
      shoplist.map((product) =>
        product.id === id ? { ...product, amount } : product
      )
    );
  };
  // supprimer un élément du panier
  const deleteProduct = (id) => {
    setShoplist(shoplist.filter((product) => product.id !== id));
  };

  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">Ma commande</h1>
      </div>
      <h2 className="shoplist-title">Mon panier</h2>
      {shoplist &&
        shoplist.map((element) => (
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
      <TotalOrder total={total} />

      <div className="container-button-shop">
        <div>
          <button
            className="validate-button"
            type="button"
            onClick={() => navigate("/sendorder")}
          >
            Valider la Commande
          </button>
        </div>
        <div>
          <button
            className="cancel-button"
            type="button"
            onClick={() => setShoplist([])}
          >
            Vider Panier
          </button>
        </div>
      </div>
    </div>
  );
}

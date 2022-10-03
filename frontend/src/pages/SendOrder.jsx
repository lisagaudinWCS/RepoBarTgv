import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BothIdentificationPage from "./BothIdentificationPage";
import AuthContext from "../contexts/AuthContext";

import ShoplistContext from "../context/ShoplistContext";

import TotalOrder from "../components/TotalOrder";
import SummaryOrder from "../components/SummaryOrder";
import { getDate } from "../services/DateManager";

export default function SendOrder() {
  const { shoplist } = useContext(ShoplistContext);
  useEffect(() => {
    localStorage.setItem("shoplist", JSON.stringify(shoplist));
  }, [shoplist]);

  const navigate = useNavigate();
  const total = shoplist
    .reduce((acc, product) => acc + product.amount * product.price, 0)
    .toFixed(2);

  const orderNumber = Date.now().toString(36).substring(2);

  const sendOrder = (orderNum) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/shoplists`, {
        order_number: orderNum,
        total_price: total,
        status: "crée",
        date: getDate(),
        ticket_id: 1,
        shoplist,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
    navigate("/orderfinito");
  };

  // const loaderSend = () => {
  //   navigate("/loader");
  //   setInterval(() => sendOrder(orderNumber), 3000);
  // };
  const navigateTocancel = useNavigate();

  const removeOrder = () => {
    navigateTocancel("/cancelorder");
  };

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div className="container-title-menu">
            <h1 className="title-menu-blue">Ma commande</h1>
          </div>
          <h2 className="shoplist-title">Récapitulatif de commande</h2>
          {shoplist &&
            shoplist.map((element) => (
              <SummaryOrder
                key={element.id}
                id={element.id}
                name={element.name}
                price={element.price}
                amount={element.amount}
                imageCart={element.image}
                description={element.description}
              />
            ))}
          <TotalOrder total={total} />
          <div className="container-button-shop">
            <div>
              <button
                className="validate-button"
                type="button"
                onClick={() => sendOrder(orderNumber)}
              >
                Valider la Commande
              </button>
            </div>
            <div>
              <button
                className="cancel-button"
                type="button"
                onClick={() => removeOrder()}
              >
                Annuler Commande
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-need-connexion">
          <BothIdentificationPage />
          <h2 className="need-connection">Vous devez être connecté</h2>
        </div>
      )}
    </div>
  );
}

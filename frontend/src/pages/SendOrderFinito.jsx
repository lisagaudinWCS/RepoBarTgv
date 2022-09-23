import { useEffect, useContext } from "react";

import Form from "../components/Form";

import ShoplistContext from "../context/ShoplistContext";

export default function SendOrderFinito() {
  const { setShoplist } = useContext(ShoplistContext);
  useEffect(() => {
    setShoplist([]);
  }, []);
  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">Ma commande</h1>
      </div>
      <h2 className="shoplist-title">Commande Envoyée !</h2>
      <p className="text-send-order-finito">
        Merci de votre commande Vous pouvez récupérer votre commande au Bar de
        votre TGV INOUI
      </p>
      <Form />
    </div>
  );
}

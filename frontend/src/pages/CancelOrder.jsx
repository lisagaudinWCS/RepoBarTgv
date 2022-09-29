import { useEffect, useContext } from "react";

import ShoplistContext from "../context/ShoplistContext";
import ConfirmationPage from "../components/ConfirmationPage";

export default function CancelOrder() {
  const { shoplist, setShoplist } = useContext(ShoplistContext);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoplist));
  }, [shoplist]);

  useEffect(() => {
    setShoplist([]);
  }, []);

  return <ConfirmationPage title="Commande" name="commande" action="annulée" />;
}

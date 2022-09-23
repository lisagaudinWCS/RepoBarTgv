import { Link } from "react-router-dom";
import { useContext } from "react";
import logoInoui from "../assets/tgvInoui.png";
import panier from "../assets/panier.png";
import user from "../assets/utilisateur.png";

import ShoplistContext from "../context/ShoplistContext";

export default function HeaderHome() {
  const { shoplist } = useContext(ShoplistContext);
  const amount = shoplist.reduce((acc, product) => acc + product.amount, 0);

  return (
    <div>
      <div className="container-header">
        <div className="logo-inoui">
          <Link to="/">
            <img src={logoInoui} alt="logo-inoui" />
          </Link>
        </div>
        <div className="logo-user">
          <Link to="/login">
            <img src={user} alt="logo user" />
          </Link>
        </div>
        <div className="logo-panier">
          <Link to="/shoplists">
            <img src={panier} alt="logo panier" />
          </Link>
          <div className="amount-order">{amount}</div>
        </div>
      </div>
    </div>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthAPI from "../services/AuthAPI";
import AuthContext from "../contexts/AuthContext";
import logoInoui from "../assets/tgvInoui.png";
import panier from "../assets/panier.png";
import user from "../assets/utilisateur.png";
import deconnexion1 from "../assets/deconnexion1.png";

import ShoplistContext from "../context/ShoplistContext";

export default function HeaderHome() {
  const { shoplist } = useContext(ShoplistContext);
  const amount = shoplist.reduce((acc, product) => acc + product.amount, 0);

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 390) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);

  function handleLogout() {
    AuthAPI.logout();
    setIsAuthenticated(false);
    navigate("/");
  }

  return (
    <div>
      <div className={fix ? "container-header fixed" : "container-header"}>
        <div className="logo-inoui">
          <Link to="/">
            <img src={logoInoui} alt="logo-inoui" />
          </Link>
        </div>
        <div className="container-user">
          {isAuthenticated ? (
            <div className="when-authenticated-container">
              <div className="logo-disconnect">
                <input
                  type="image"
                  className="disconnect-btn"
                  alt="logout"
                  src={deconnexion1}
                  onClick={() => handleLogout()}
                />
              </div>

              <div className="logo-user">
                <Link to="/profil/1">
                  <img src={user} alt="logo user" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="logo-user">
              <Link to="/signin">
                <img src={user} alt="logo user" />
              </Link>
            </div>
          )}
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

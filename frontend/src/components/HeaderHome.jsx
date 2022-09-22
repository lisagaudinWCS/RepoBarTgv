import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthAPI from "../services/AuthAPI";
import AuthContext from "../contexts/AuthContext";
import logoInoui from "../assets/tgvInoui.png";
import panier from "../assets/panier.png";
import user from "../assets/utilisateur.png";

export default function HeaderHome() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    AuthAPI.logout();
    setIsAuthenticated(false);
    navigate("/");
  }

  return (
    <div>
      <div className="container-header">
        <div className="logo-inoui">
          <Link to="/">
            <img src={logoInoui} alt="logo-inoui" />
          </Link>
        </div>

        {isAuthenticated ? (
          <div className="logo-disconnect">
            <button type="button" onClick={() => handleLogout()}>
              Deconnexion
            </button>
          </div>
        ) : (
          <div className="logo-user">
            <Link to="/login">
              <img src={user} alt="logo user" />
            </Link>
          </div>
        )}

        <div className="logo-panier">
          <Link to="/shoplists">
            <img src={panier} alt="logo panier" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import logoInoui from "../assets/tgvInoui.png";
import panier from "../assets/panier.png";
import user from "../assets/utilisateur.png";

export default function HeaderHome() {
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
        </div>
      </div>
    </div>
  );
}

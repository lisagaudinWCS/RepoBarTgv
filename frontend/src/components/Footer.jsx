import logoSncf from "../assets/logoSncf.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="site-plan">
        <h5>Plan du site</h5>
        <a href="/">Accueil</a>
        <a href="/login">Inscription/Connexion</a>
        <a href="/shoplist">Panier</a>
        <a href="/forms">Nous contactez</a>
      </div>
      <div className="container-image-footer">
        <img src={logoSncf} alt="logo Sncf" />
      </div>
      <div className="container-ext">
        <a target="blank" href="https://www.sncf-connect.com">
          SNCF-Connect
        </a>
        <a target="blank" href="https://lebar.sncf.com/page?id=cgu#donnees">
          Politique de protection des données
        </a>
      </div>
    </div>
  );
}

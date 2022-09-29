import BanniereHome from "../components/BanniereHome";
import ConnexionForm from "../components/ConnexionForm";

// Component bandeau Inoui + bandeau inscription + formulaire
function Connexion() {
  return (
    <div>
      <BanniereHome />
      <h3 className="connexion-title-blue">CONNEXION</h3>
      <ConnexionForm />
    </div>
  );
}

export default Connexion;

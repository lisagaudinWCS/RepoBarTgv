import ConnexionForm from "../components/ConnexionForm";

// Component bandeau Inoui + bandeau inscription + formulaire
function Connexion() {
  return (
    <div>
      {/* Components header INOUI + ban-img + navbar */}
      <h3 className="connexion-title-blue">CONNEXION</h3>
      <ConnexionForm />
    </div>
  );
}

export default Connexion;

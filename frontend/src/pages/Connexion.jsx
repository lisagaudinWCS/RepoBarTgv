import ConnexionForm from "../components/ConnexionForm";

// Component bandeau Inoui + bandeau inscription + formulaire
function Connexion() {
  return (
    <div>
      <h3 className="connexion-title-blue">Identification Client</h3>
      <ConnexionForm />
    </div>
  );
}

export default Connexion;

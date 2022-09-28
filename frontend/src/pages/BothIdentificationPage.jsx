/* eslint-disable jsx-a11y/click-events-have-key-events */
import ConnexionForm from "@components/ConnexionForm";
import { Link } from "react-router-dom";

export default function BothIdentificationPage() {
  // TOTO
  return (
    <div>
      <div className="bothtitles-side-by-side">
        <Link className="connexion-title-blue" to="/signin">
          <h3>CONNEXION</h3>
        </Link>
        <Link className="subscribe-title-red" to="/subscribe">
          <h3>INSCRIPTION</h3>
        </Link>
      </div>
      <ConnexionForm />
    </div>
  );
}

import { useState } from "react";
import "./connexion.css";

export default function ConnexionForm() {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  return (
    <form className="connexion-form">
      <div className="connexion-inputs">
        <label htmlFor="email">
          email: <span className="required-field">*</span>
        </label>
        <input
          className="connexion-box"
          onChange={(e) => setUsers({ ...users, email: e.target.value })}
          value={users.email}
          type="email"
          id="email"
          required
        />
        <br />
        <label htmlFor="password">
          Mot de passe: <span className="required-field">*</span>
        </label>
        <input
          className="connexion-box"
          onChange={(e) => setUsers({ ...users, password: e.target.value })}
          value={users.password}
          type="password"
          id="password"
          required
        />
        <a href="http://google.fr" className="forget-pass-link">
          Mot de passe oublié ?
        </a>
      </div>
      <div className="login-submit">
        <button className="login-btn" type="submit" id="login-button">
          Se connecter
        </button>
        <p className="blabla">
          Les champs <span className="required-field">*</span> sont
          obligatoires.
        </p>
      </div>
    </form>
  );
}

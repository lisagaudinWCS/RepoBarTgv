import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../services/AuthAPI";
import AuthContext from "../contexts/AuthContext";
import "./connexion.css";
// import jwtDecode from "jwt-decode";

// const jwt = require("jsonwebtoken");
// // this is just for test, get a real verified token from your middleware
// const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
// const token = jwt.decode(testToken);
// let subjectId = token.sub;

export default function ConnexionForm() {
  const navigate = useNavigate();
  // const token = jwtDecode(token.sub);

  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthAPI.authenticate(users);
      setIsAuthenticated(true);
      navigate(`/profil/1`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="connexion-form" onSubmit={(e) => handleSubmit(e)}>
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

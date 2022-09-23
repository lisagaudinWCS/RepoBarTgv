import axios from "axios";
import { useState } from "react";
import "./subscribe.css";

export default function SubscribeForm() {
  const [clients, setClients] = useState({
    // client_number: 800,
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    avatar: "",
    birth_date: "",
    // isAdmin: 0,
  });
  const createClient = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/clients`, {
        ...clients,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    // lastname, firstname, email, date, mdp
    <form className="subscribe-form" onSubmit={createClient}>
      <div className="subscribe-inputs">
        <label htmlFor="lastname">
          Votre nom: <span className="required-field">*</span>
        </label>
        <input
          className="subscribe-box"
          onChange={(e) => setClients({ ...clients, lastname: e.target.value })}
          value={clients.lastname}
          type="text"
          id="lastname"
          required
        />
        <br />
        <label htmlFor="firstname">
          Votre prénom: <span className="required-field">*</span>
        </label>
        <input
          className="subscribe-box"
          onChange={(e) =>
            setClients({ ...clients, firstname: e.target.value })
          }
          value={clients.firstname}
          type="text"
          id="firstname"
          required
        />
        <br />
        <label htmlFor="birth_date">
          Date de naissance: <span className="required-field">*</span>
        </label>
        <input
          className="subscribe-box"
          placeholder="----/--/--"
          onChange={(e) =>
            setClients({ ...clients, birth_date: e.target.value })
          }
          value={clients.birth_date}
          type="date"
          id="birth_date"
          required
        />
        <br />
        <label htmlFor="email">
          email: <span className="required-field">*</span>
        </label>
        <input
          className="subscribe-box"
          onChange={(e) => setClients({ ...clients, email: e.target.value })}
          value={clients.email}
          type="email"
          id="email"
          required
        />
        <br />
        <label htmlFor="password">
          Mot de passe: <span className="required-field">*</span>
        </label>
        <input
          className="subscribe-box"
          onChange={(e) => setClients({ ...clients, password: e.target.value })}
          value={clients.password}
          type="password"
          id="password"
          required
        />
        <br />
        <label htmlFor="password">
          Confirmer mot de passe: <span className="required-field">*</span>
        </label>
        <input
          className="subscribe-box"
          type="password"
          id="password-bis"
          required
        />
      </div>
      <div className="parttwo">
        <button className="subscribe-btn" type="submit" id="submit-button">
          S'inscrire
        </button>
        <p className="blabla">
          Les champs <span className="required-field">*</span> sont
          obligatoires.
        </p>
      </div>
    </form>
  );
}

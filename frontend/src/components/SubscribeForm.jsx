import axios from "axios";
import { useState } from "react";
import "./subscribe.css";

export default function SubscribeForm() {
  const [clients, setClients] = useState({
    client_number: 800,
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    avatar: "",
    birth_date: "2022-09-12",
    isAdmin: 0,
  });

  const createClient = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/clients", {
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
        <label htmlFor="lastname">Votre nom: </label>
        <input
          className="input-box"
          value={clients.lastname}
          type="text"
          id="lastname"
          required
        />
        <br />
        <label htmlFor="firstname">Votre prénom: </label>
        <input
          className="input-box"
          onChange={(e) =>
            setClients({ ...clients, firstname: e.target.value })
          }
          value={clients.firstname}
          type="text"
          id="firstname"
          required
        />
        <br />
        <label htmlFor="birth_date">Date de naissance: </label>
        <input
          className="input-box"
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
        <label htmlFor="email">email: </label>
        <input
          className="input-box"
          onChange={(e) => setClients({ ...clients, email: e.target.value })}
          value={clients.email}
          type="email"
          id="email"
          required
        />
        <br />
        <label htmlFor="password">MDP: </label>
        <input
          className="input-box"
          onChange={(e) => setClients({ ...clients, password: e.target.value })}
          value={clients.password}
          type="password"
          id="password"
          required
        />
      </div>
      <div>
        <button className="subscribe-btn" type="submit" id="submit-button">
          S'inscrire
        </button>
      </div>
    </form>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { transBirthDate } from "../services/DateManager";

export default function ChangeInfosCmpnt() {
  const { id } = useParams();
  const [clientInfos, setClientInfos] = useState({
    client_number: "",
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    avatar: "",
    birth_date: "",
    isAdmin: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/clients/${id}`)
      .then((response) => response.data)
      .then((data) => setClientInfos(data));
  }, []);

  function updateClient() {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/clients/${id}`, {
      ...clientInfos,
    });
  }

  const birthdate = transBirthDate(clientInfos.birth_date);

  return (
    <>
      <h1 className="profile-title">Mon profil</h1>
      <div className="profile-container">
        <div className="avatar-container">
          <img
            src={clientInfos.avatar}
            // alt="avatar"
            className="avatar"
            alt={`avatar of ${clientInfos.name}`}
          />
          <button type="button" className="avatar-btn" id="avatar-btn">
            Modifier image
          </button>
        </div>
        {/* <div className="info-container" /> */}
        {/* <button type="button" className="change-info-btn">
            MODIFIER MES INFOS ✏️
          </button> */}
        <form
          className="user-input-box"
          onSubmit={(e) => {
            e.preventDefault();
            clientInfos.birth_date = transBirthDate(clientInfos.birth_date);
            updateClient();
          }}
        >
          <label className="user-label" htmlFor="lastname">
            Nom :
          </label>
          <input
            onChange={(e) =>
              setClientInfos({ ...clientInfos, lastname: e.target.value })
            }
            className="user-input"
            type="text"
            id="lastname"
            value={clientInfos.lastname}
            required
          />
          <br />
          <label className="user-label" htmlFor="firstname">
            Prénom :
          </label>
          <input
            onChange={(e) =>
              setClientInfos({ ...clientInfos, firstname: e.target.value })
            }
            className="user-input"
            type="text"
            id="firstname"
            value={clientInfos.firstname}
            required
          />
          <br />
          <label className="user-label" htmlFor="birth_date">
            Date de naissance :
          </label>
          <input
            onChange={(e) =>
              setClientInfos({ ...clientInfos, birth_date: e.target.value })
            }
            className="user-input"
            type="date"
            id="birth_date"
            value={birthdate}
            required
          />
          <br />
          <label className="user-label" htmlFor="email">
            E-mail :
          </label>
          <input
            onChange={(e) =>
              setClientInfos({ ...clientInfos, email: e.target.value })
            }
            className="user-input"
            type="email"
            id="email"
            value={clientInfos.email}
            required
          />
          <br />
          <label className="user-label" htmlFor="pass">
            Mot de passe :
          </label>
          <input
            onChange={(e) =>
              setClientInfos({ ...clientInfos, password: e.target.value })
            }
            type="password"
            id="password"
            value={clientInfos.password}
            required
          />
          <br />
          <label className="user-label" htmlFor="pass">
            Confirmer mot de passe :
          </label>
          <input
            onChange={(e) =>
              setClientInfos({ ...clientInfos, password: e.target.value })
            }
            type="password"
            id="c-password"
            value={clientInfos.password}
            required
          />
          <button className="subscribe-btn" type="submit" id="submit-button">
            S'inscrire
          </button>
        </form>
      </div>
    </>
  );
}

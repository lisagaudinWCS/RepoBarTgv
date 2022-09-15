import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UserInformations() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [clientInfos, setClientInfos] = useState({
    // client_number: 101,
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    avatar: "",
    birth_date: "",
    // isAdmin: 1,
  });

  const getClientInfos = () => {
    axios
      .get(`http://localhost:5000/clients/${id}`)
      .then((response) => response.data)
      .then((data) => setClientInfos(data));
  };
  useEffect(() => getClientInfos(), []);

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
        <div className="user-input-box">
          <button
            type="button"
            className="change-info-btn"
            onClick={() => navigate(`/profil/${id}/edit`)}
          >
            MODIFIER MES INFOS ✏️
          </button>

          <label className="user-label" htmlFor="lastname">
            Nom :
          </label>
          <input
            className="user-input"
            type="text"
            id="lastname"
            value={clientInfos.lastname}
            disabled
          />
          <br />
          <label className="user-label" htmlFor="firstname">
            Prénom :
          </label>
          <input
            className="user-input"
            type="text"
            id="firstname"
            value={clientInfos.firstname}
            disabled
          />
          <br />
          <label className="user-label" htmlFor="birth_date">
            Date de naissance :
          </label>
          <input
            className="user-input"
            type="date"
            id="birth_date"
            value={clientInfos.birth_date}
            disabled
          />
          <br />
          <label className="user-label" htmlFor="email">
            E-mail :
          </label>
          <input
            className="user-input"
            type="email"
            id="email"
            value={clientInfos.email}
            disabled
          />
          <br />
          <label className="user-label" htmlFor="pass">
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            value={clientInfos.password}
            disabled
          />
          <br />
        </div>
      </div>
    </>
  );
}

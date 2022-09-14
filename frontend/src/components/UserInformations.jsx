import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserInformations() {
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
    <div>
      <div className="avatar-container">
        <img
          src="#"
          alt="avatar"
          className="avatar"
          //   alt={`avatar of ${client.name}`}
        />
        <button type="button" className="avatar-btn" id="avatar-btn">
          Modifier image
        </button>
      </div>
      <div className="info-container" />
      <p className="chang-info-btn">MODIFIER MES INFOS ✏️</p>
      <label htmlFor="lastname">Nom :</label>
      <input type="text" id="lastname" value={clientInfos.lastname} disabled />
      <br />
      <label htmlFor="firstname">Prénom :</label>
      <input
        type="text"
        id="firstname"
        value={clientInfos.firstname}
        disabled
      />
      <br />
      <label htmlFor="birth_date">Date de naissance :</label>
      <input
        type="date"
        id="birth_date"
        value={clientInfos.birth_date}
        disabled
      />
      <br />
      <label htmlFor="email">E-mail :</label>
      <input type="email" id="email" value={clientInfos.email} disabled />
      <br />
      <label htmlFor="password">Mot de passe :</label>
      <input type="pass" id="password" value={clientInfos.password} disabled />
      <br />
    </div>
  );
}

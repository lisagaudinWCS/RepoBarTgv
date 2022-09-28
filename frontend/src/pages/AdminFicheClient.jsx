// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { transBirthDate } from "../services/DateManager";

// export default function FicheClient() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [clientInfos, setClientInfos] = useState({
//     // client_number: 101, a définir ?
//     lastname: "",
//     firstname: "",
//     email: "",
//     password: "",
//     avatar: "",
//     birth_date: "",
//     client_number: "",
//     isAdmin: 1,
//   });

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_BACKEND_URL}/clients/${id}`)
//       .then((response) => response.data)
//       .then((data) => setClientInfos(data));
//   }, []);

//   const birthdate = transBirthDate(clientInfos.birth_date);

//   return (
//     <>
//       <h1 className="client-title">Identifiant utilisateur</h1>
//       <div className="client-container">
//         <div className="avatar-container">
//           <img
//             src={clientInfos.avatar}
//             // alt="avatar"
//             className="avatar"
//             alt={`avatar of ${clientInfos.name}`}
//           />
//           <button type="button" className="avatar-btn" id="avatar-btn">
//             Modifier image
//           </button>
//         </div>

//           <label className="user-label" htmlFor="lastname">
//             Nom :
//           </label>
//           <input
//             className="user-input"
//             type="text"
//             id="lastname"
//             value={clientInfos.lastname}
//             disabled
//           />
//           <label className="user-label" htmlFor="firstname">
//             Prénom :
//           </label>
//           <input
//             className="user-input"
//             type="text"
//             id="firstname"
//             value={clientInfos.firstname}
//             disabled
//           />
//           <label className="user-label" htmlFor="birth_date">
//             Date de naissance :
//           </label>
//           <input
//             className="user-input"
//             type="date"
//             id="birth_date"
//             value={birthdate}
//             disabled
//           />
//           <label className="user-label" htmlFor="email">
//             E-mail :
//           </label>
//           <input
//             className="user-input"
//             type="email"
//             id="email"
//             value={clientInfos.email}
//             disabled
//           />
//           <label className="user-label" htmlFor="pass">
//             Numéro de client :
//           </label>
//           <input
//             type="client-id"
//             id="client.id"
//             value={clientInfos.id}
//             disabled
//           />
//           <label className="admin-radio" htmlFor="pass">
//             Administrateur :
//           </label>
//           <input

//         // </div>

//                 {/* <div className="client-container" />
//                 <div className="user-input-box">
//           <button
//             type="button"
//             className="change-info-btn"
//             onClick={() => navigate(`/profil/${id}/edit`)}
//           >
//             MODIFIER MES INFOS ✏️
//           </button> */}

//     </div>
//   );
// }

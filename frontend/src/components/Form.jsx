import { useState } from "react";
import { Rating } from "react-simple-star-rating";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import messageSend from "../assets/message.gif";

import "./formCpmt.css";
import { getDate } from "../services/DateManager";

function Form() {
  // Générer un id de formulaire aléatoire et unique
  const idClient = Math.random().toString(16).slice(8);
  // préparer objet post DB
  const [userForm, setUserForm] = useState({
    form_number: idClient,
    date: getDate(),
    description: "",
    email: "",
    firstname: "",
    lastname: "",
    rating_id: "",
  });

  // système de notation
  const [rating, setRating] = useState(0); // initial rating value

  const handleRating = (rate) => {
    setRating(rate);
    setUserForm({ ...userForm, rating_id: rate });
  };

  // animation envoyé

  const [inputForm, setInputForm] = useState(false);
  const [textReturnForm, setTextReturnForm] = useState(
    "Votre avis nous intéresse :"
  );

  // requête post DB
  const createItem = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/forms`, {
        ...userForm,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      })
      .then(() => setInputForm(true))
      .then(() => setTextReturnForm("Votre avis compte !"));
    // .then(() =>
    //   setInterval(
    //     () => setTextReturnForm("Merci ! Votre avis compte !"),
    //     5000
    //   )
    // );
    // .then(() => setInputForm(false));
  };

  return (
    // form_number, date, description, email, name, category_form_id
    <form className="container" onSubmit={createItem}>
      {/* <Loader inputForm={inputForm} /> */}
      <h1 className="comment-title">{textReturnForm}</h1>

      <div className={!inputForm ? "input-form" : "inputForm disable"}>
        <label htmlFor="name">Votre nom: </label>
        <input
          className="input-box"
          // placeholder="name"
          onChange={(e) =>
            setUserForm({ ...userForm, lastname: e.target.value })
          }
          value={userForm.lastname}
          type="text"
          id="name"
          required
        />
        <label htmlFor="name">Votre prénom: </label>
        <input
          className="input-box"
          // placeholder="name"
          onChange={(e) =>
            setUserForm({ ...userForm, firstname: e.target.value })
          }
          value={userForm.firstname}
          type="text"
          id="name"
          required
        />
        <label htmlFor="email">email: </label>
        <input
          className="input-box"
          // placeholder="email"
          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
          value={userForm.email}
          type="email"
          id="email"
          required
        />
        <div className="rating-form">
          <Rating
            fillColor="#0075A1"
            allowHalfIcon
            transition
            onClick={handleRating}
            ratingValue={rating} /* Available Props */
          />
        </div>
        <label htmlFor="description">Votre avis: </label>
        <textarea
          className="input-box"
          onChange={(e) =>
            setUserForm({ ...userForm, description: e.target.value })
          }
          value={userForm.description}
          type="textarea"
          id="description"
          required
        />
      </div>
      <div className="container-button">
        <button
          className={!inputForm ? "input-box" : "input-box disable"}
          type="submit"
          id="send-button"
        >
          Envoyé
        </button>
      </div>
      <div className="container-send-animation">
        <img
          className={inputForm ? "send-animation" : "send-animation disable"}
          src={messageSend}
          alt="gif"
        />
      </div>
    </form>
  );
}

export default Form;

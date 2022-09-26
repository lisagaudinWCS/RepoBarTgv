import { useState } from "react";
import { Rating } from "react-simple-star-rating";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

import "./formCpmt.css";

function Form() {
  // Générer un id de formulaire aléatoire et unique
  const idClient = Math.random().toString(16).slice(8);

  // préparer objet post DB
  const [userForm, setUserForm] = useState({
    form_number: idClient,
    date: Date(),
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

  // animation boutton envoyé
  const [buttonText, setButtonText] = useState("Envoyer");
  const changeText = (text) => {
    setButtonText(text);
  };

  // requête post DB
  const createItem = (event) => {
    event.preventDefault();
    changeText("Message envoyé !");
    axios
      .post("http://localhost:5000/forms", {
        ...userForm,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    // form_number, date, description, email, name, category_form_id
    <form className="container" onSubmit={createItem}>
      <h1 className="comment-title">Votre avis nous intéresse :</h1>
      <div className="input-form">
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
        <button className="input-box" type="submit" id="send-button">
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default Form;

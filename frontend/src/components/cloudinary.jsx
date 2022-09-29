import { useState } from "react";
import Modal from "react-modal";

function Cloudinary({ setUrl }) {
  const [image, setImage] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const uploadImage = () => {
    const data = new FormData();

    data.append("file", image);
    data.append("upload_preset", "repasAbord");
    data.append("cloud_name", "dy2sdsqnn");
    fetch("https://api.cloudinary.com/v1_1/dy2sdsqnn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data1) => {
        setUrl(data1.url);
      })
      .then(() => closeModal())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <button type="button" onClick={openModal} className="validate-button">
          Modifier Avatar
        </button>
        <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="upload">
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <div className="container-close-button">
            <button className="close-button" type="button" onClick={closeModal}>
              X
            </button>
          </div>
          <form>
            <h4>
              {!image
                ? "Veuillez choisir un Avatar !"
                : "Votre image à bien été importée"}
            </h4>
            <label
              className={image ? "label-upload ok" : "label-upload"}
              htmlFor="file"
            >
              Parcourir...
            </label>
            <input
              className="upload-file"
              type="file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button
              type="button"
              className={!image ? "cancel-button" : "validate-button ok"}
              onClick={uploadImage}
            >
              Valider
            </button>
          </form>
        </Modal>
        {/* <label htmlFor="file" className="label-button-upload" id="upload">
          Upload Fichier
        </label> */}
        {/* <input
          className="upload-button"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        /> */}
        {/* <button type="button" onClick={uploadImage} id="uploadModal">
          Modifier votre photo
        </button> */}
      </div>
    </div>
  );
}
export default Cloudinary;

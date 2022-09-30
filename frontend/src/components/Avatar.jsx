import { useEffect, useState } from "react";
import Modal from "react-modal";

function Avatar({ setUrl, url, setClientInfos, clientInfos }) {
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

  useEffect(() => {
    setClientInfos({ ...clientInfos, avatar: url });
  }, [url]);

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
        <button type="button" onClick={openModal} className="avatar-btn">
          Modifier Avatar
        </button>
        <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="upload">
          <div className="container-close-button">
            <button className="close-button" type="button" onClick={closeModal}>
              X
            </button>
          </div>
          <form>
            <h4 className="title-avatar">
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
      </div>
    </div>
  );
}
export default Avatar;

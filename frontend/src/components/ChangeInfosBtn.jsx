import React, { useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tutorial");
    data.append("cloud_name", "breellz");

    fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data1) => {
        setUrl(data1.url);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="button" onClick={uploadImage}>
          Upload
        </button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} alt="toto" />
      </div>
    </div>
  );
}

export default App;

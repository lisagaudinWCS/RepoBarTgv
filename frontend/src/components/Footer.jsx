import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sncfConnect">
        <a href="https://www.sncf-connect.com/">www.sncf-connect.com</a>{" "}
      </div>
      <div className="logoSncf">
        <img
          src="https://res.cloudinary.com/dbkscupri/image/upload/v1663145083/logo%20sncfp3/logoSncf_uhcg4l.png"
          alt="logo sncf"
        />
      </div>
    </div>
  );
}

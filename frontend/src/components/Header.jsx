import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="inoui">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dbkscupri/image/upload/v1663142605/headerP3/Logo-TGV-inOUI-Fd_Blanc_pb6yxt.jpg"
            alt="TGV Inoui"
          />
        </Link>
      </div>

      <div className="connect">
        <Link to="/login">
          <img
            src="https://res.cloudinary.com/dbkscupri/image/upload/v1663142363/picto/client_hyvsl4.png"
            alt="connection"
          />
        </Link>
      </div>
      <div className="panier">
        <Link to="/shoplists">
          <img
            src="https://res.cloudinary.com/dbkscupri/image/upload/v1663142627/headerP3/panier_k34kmj.png"
            alt="panier"
          />
        </Link>
      </div>
    </div>
  );
}

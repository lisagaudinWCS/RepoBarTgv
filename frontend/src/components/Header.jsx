import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="inoui">
        <img
          src="https://res.cloudinary.com/dbkscupri/image/upload/v1662994211/headerP3/inoui_irksbk.png"
          alt="TGV Inoui"
        />
      </div>
      <div className="connect">
        <img
          src="https://res.cloudinary.com/dbkscupri/image/upload/v1663000036/picto/client_nrxrmb.png"
          alt="connection"
        />
      </div>
      <div className="panier">
        <img
          src="https://res.cloudinary.com/dbkscupri/image/upload/v1662994788/headerP3/panier2_q3fq57.png"
          alt="panier"
        />
      </div>
    </div>
  );
}

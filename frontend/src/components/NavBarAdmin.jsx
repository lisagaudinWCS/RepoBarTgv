import React from "react";
import homeIco from "../assets/homeIco.png";

function NavBarAdmin({ setfilterNavigation }) {
  return (
    <div>
      <div className="nav-bar-admin">
        <div className="admin-btn">
          <button
            className="container-home-icon"
            type="button"
            value="
          0"
            onClick={(e) => setfilterNavigation(e.target.value)}
          >
            <img className="home-icon" src={homeIco} alt="home-icon" />
          </button>
          <button
            type="button"
            value="
          1"
            onClick={(e) => setfilterNavigation(e.target.value)}
          >
            Clients
          </button>
          <button
            type="button"
            value="2"
            onClick={(e) => setfilterNavigation(e.target.value)}
          >
            Produits
          </button>
          <button
            type="button"
            value="3"
            onClick={(e) => setfilterNavigation(e.target.value)}
          >
            Commandes
          </button>
          <button
            type="button"
            value="4"
            onClick={(e) => setfilterNavigation(e.target.value)}
          >
            Messages
          </button>
          <button
            type="button"
            value="5"
            onClick={(e) => setfilterNavigation(e.target.value)}
          >
            Vue Client
          </button>
        </div>
      </div>
    </div>
  );
}
export default NavBarAdmin;

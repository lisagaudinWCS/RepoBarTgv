import React from "react";

export function NavBarTicket({ setfilterNavigation }) {
  return (
    <div>
      <div className="nav-bar-ticket">
        <button
          type="button"
          value="
          0"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Mes trajets
        </button>
        <button
          type="button"
          value="1"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Mon Profil
        </button>
        <button
          type="button"
          value="2"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Mes Commandes
        </button>
      </div>
    </div>
  );
}
export default NavBarTicket;

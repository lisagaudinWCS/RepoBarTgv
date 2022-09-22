import React from "react";
import { Link } from "react-router-dom";
import "./NavBarTickets.css";

export function NavBarTicket() {
  return (
    <div>
      <nav className="NavbarTicket">
        <ul className="NavbarTickets-ul">
          <li>
            <Link to="/">Mes trajets</Link>
          </li>
          <li>
            <Link to="/">Mon profil</Link>
          </li>
          <li>
            <Link to="/">Mes commandes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBarTicket;

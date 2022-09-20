import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <Link to="/">Formules</Link>
          </li>
          <li>
            <Link to="/">Plats Froids</Link>
          </li>
          <li>
            <Link to="/advanced">Plats Chauds</Link>
          </li>
          <li>
            <Link to="/toto">Desserts</Link>
          </li>
          <li>
            <Link to="/tata">Boissons</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

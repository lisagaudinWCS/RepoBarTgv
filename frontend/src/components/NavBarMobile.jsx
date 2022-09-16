import React from "react";
import { Link } from "react-router-dom";
import "./NavBarMobile.css";

export default function NavBarMobile() {
  return (
    <div>
      <nav className="navbarMain">
        <ul className="navbarUl">
          <li>
            <Link to="/">Formules</Link>
          </li>
          <li>
            <Link to="/">Plats Froids</Link>
          </li>
          <li>
            <Link to="/advanced">Plats Chaud</Link>
          </li>
        </ul>
        <ul className="navbarUl2">
          <li>
            <Link to="/toto">Desserts</Link>
          </li>
          <li>
            <Link to="/drinks">Boissons</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

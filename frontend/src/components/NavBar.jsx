import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forms">Form</Link>
          </li>
          <li>
            <Link to="/advanced">Plats Chaud</Link>
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

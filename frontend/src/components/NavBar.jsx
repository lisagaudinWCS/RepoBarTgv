import React from "react";
// import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>{/* <Link to="/">Home</Link> */}</li>
          <li>{/* <Link to="/advanced-search">Search</Link> */}</li>
          <li>{/* <Link to="/random">Random Game</Link> */}</li>
          <li>{/* <Link to="/quiz">Quiz</Link> */}</li>
          <li>{/* <Link to="/indexgames">Index</Link> */}</li>
          <li>{/* <Link to="/glossary">Glossary</Link> */}</li>
        </ul>
      </nav>
    </div>
  );
}

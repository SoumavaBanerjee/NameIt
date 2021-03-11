import React from "react";
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <h1>Name-It</h1>
      </div>
      <ul>
        <li>
          <a href="#">link1</a>
        </li>
        <li>
          <a href="#">link2</a>
        </li>
        <li>
          <a href="#">link3</a>
        </li>
        <li>
          <a href="#">link4</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

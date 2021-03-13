/* eslint-disable jsx-a11y/anchor-is-valid */
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
          <a href="https://github.com/SoumavaBanerjee">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/soumavabanerjee--/">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

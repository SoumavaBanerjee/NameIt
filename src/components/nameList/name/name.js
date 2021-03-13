import React from "react";
import "./styles.scss";

const name = ({ name }) => {
  const nameCheapUrl =
    "https://www.namecheap.com/domains/registration/results/?domain=";

  return (
    <a
      className="nameLink"
      href={`${nameCheapUrl}${name}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="card">
        <p>{name}</p>
      </div>
    </a>
  );
};

export default name;

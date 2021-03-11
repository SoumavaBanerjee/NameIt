import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Searchbar = () => {
  return (
    <div class="search">
      <input type="text" placeholder="What are you looking for?" />
      <button type="submit" class="btn__primary">
        <FontAwesomeIcon icon={faSearch} color="white" />
      </button>
    </div>
  );
};

export default Searchbar;

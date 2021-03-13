import React, { useState, useRef } from "react";
import "./styles.scss";
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = ({ input, setInput }) => {
  const [barOpened, setBarOpened] = useState(false);
  const inputFocus = useRef();

  return (
    <div className="wrapper">
      <div
        className="input__wrapper"
        // barOpened={barOpened}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on focus open search bar
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false);
        }}
        style={{
          width: barOpened ? "20rem" : "2rem",
          cursor: barOpened ? "auto" : "pointer",
        }}
      >
        <button
          style={{
            pointerEvents: barOpened ? "auto" : "none",
            cursor: barOpened ? "pointer" : "none",
          }}
          className="search__btn"
          onClick={() => (barOpened ? setBarOpened(true) : setBarOpened(false))}
        >
          <BiSearchAlt />
        </button>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="searchbar"
          ref={inputFocus}
          value={input}
          // barOpened={barOpened}
          placeholder="Search..."
          style={{ marginLeft: barOpened ? "1rem" : "0rem" }}
        />
      </div>
    </div>
  );
};

export default Searchbar;

import React, { useState, useRef } from "react";
import "./styles.scss";
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };
  return (
    <div className="wrapper">
      <form
        className="form"
        barOpened={barOpened}
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
        // On submit, call the onFormSubmit function
        onSubmit={onFormSubmit}
        style={{
          width: barOpened ? "30rem" : "2rem",
          cursor: barOpened ? "auto" : "pointer",
        }}
      >
        <button
          style={{
            pointerEvents: barOpened ? "auto" : "none",
            cursor: barOpened ? "pointer" : "none",
          }}
          className="search__btn"
          type="submit"
          barOpened={barOpened}
        >
          <BiSearchAlt />
        </button>
        <input
          onChange={(e) => setInput(e.target.value)}
          className="searchbar"
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Search..."
          style={{ marginLeft: barOpened ? "1rem" : "0rem" }}
        />
      </form>
    </div>
  );
};

export default Searchbar;

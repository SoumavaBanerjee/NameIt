import React from "react";

const name = ({ name }) => {
  console.log(name);

  return <a href={`https://www.google.com/search?q=${name}`}> {name}</a>;
};

export default name;

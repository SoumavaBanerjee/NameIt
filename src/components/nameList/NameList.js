import React from "react";
import "./styles.scss";
import name from "@rstacruz/startup-name-generator";
import Name from "./name/name";

const NameList = ({ input, setInput }) => {
  const names = name(input).slice(0, 30);

  return (
    <div className="Namelist">
      {names.map((name, index) => {
        return <Name key={index} name={name} />;
      })}
    </div>
  );
};

export default NameList;

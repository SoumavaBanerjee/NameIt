import React from "react";
import "./styles.scss";
import name from "@rstacruz/startup-name-generator";
import Name from "./name/name";
import { useMediaQuery } from "react-responsive";

const NameList = ({ input, setInput }) => {
  const isMobile = useMediaQuery({ minWidth: 767 });

  const names = isMobile ? name(input).slice(0, 20) : name(input).slice(0, 6);

  return (
    <div className="Namelist">
      {names.map((name, index) => {
        return <Name key={index} name={name} />;
      })}
    </div>
  );
};

export default NameList;

import { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/index";
import Searchbar from "./components/searchbar";
import NameList from "./components/nameList/NameList";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <Navbar />
      <div className="search__container">
        <Searchbar input={input} setInput={setInput} />
      </div>
      <div className="name__wrapper">
        <NameList setInput={setInput} input={input} />
      </div>
    </div>
  );
}

export default App;

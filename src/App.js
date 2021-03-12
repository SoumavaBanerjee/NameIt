import "./App.scss";
import Navbar from "./components/navbar/index";
import Searchbar from "./components/searchbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="search__container">
        <Searchbar />
      </div>
    </div>
  );
}

export default App;

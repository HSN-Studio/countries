import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";

function App() {
  //States
  const [countries, setcountries] = useState(``);
  //LifeCycle Hooks
  useEffect(() => {
    loadCountries();
  }, []);
  //Regular Methods

  const loadCountries = function (continent) {
    if (!continent) {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => setcountries(data));
    }
  };
  //JSX

  return (
    <div className="App">
      <div className="countries-container">
        <Countries data={countries} />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  //States
  const [countries, setcountries] = useState(``);
  const [searchRes, setsearchRes] = useState(``);
  //LifeCycle Hooks
  useEffect(() => {
    loadCountries();
  }, []);
  //Regular Methods

  const loadCountries = function (continent) {
    if (!continent) {
      fetch("https://restcountries.com/v3/all")
        .then((res) => res.json())
        .then((data) => {
          setcountries(data);
          setsearchRes(data);
        });
    }
  };

  const changeHandler = (e) => {
    if (e.target.value.length < 1) setsearchRes(countries);
    const searchResults = countries.filter(
      (country) =>
        country.name.common.includes(e.target.value) ||
        country.name.common.toLowerCase().includes(e.target.value)
    );
    if (searchResults.length > 0) {
      setsearchRes(searchResults);
    }
  };
  //JSX

  return (
    <div className="App">
      <Header />
      <Search changeHandler={changeHandler} />
      <Filter />
      <div className="countries-container">
        <Countries data={searchRes} />
      </div>
    </div>
  );
}

export default App;

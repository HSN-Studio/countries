import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Paginations from "./components/Paginations";

function App() {
  //States
  const [countries, setcountries] = useState(``);
  const [searchRes, setsearchRes] = useState(``);
  const [region, setregion] = useState(``);

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
    if (countries.length < 1) return null;
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

  const filterHandler = (e) => {
    // While results are loaded.
    if (searchRes.length < 1) return null;
    // Set filter value
    setregion(e.target.value);
    // When No filter is applied
    if (e.target.value === "None") setsearchRes(countries);
    // When filter is selected
    const filteredResults = countries.filter((country) => {
      if (country.region === e.target.value) return country;
    });
    if (e.target.value !== "None") setsearchRes(filteredResults);
  };

  //JSX
  return (
    <div className="App">
      <Header />
      <Search changeHandler={changeHandler} />
      <Filter changeHandler={filterHandler} region={region} />
      <div className="countries-container">
        <Countries data={searchRes} />
      </div>
      <Paginations />
    </div>
  );
}

export default App;

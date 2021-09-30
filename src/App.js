import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Paginations from "./components/Paginations";
import { Router, Route, Switch } from "react-router";

function App() {
  //States
  const [countries, setcountries] = useState(``);
  const [searchRes, setsearchRes] = useState(``);
  const [region, setregion] = useState(``);
  const [pageNo, setpageNo] = useState(1);

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
    setpageNo(1);
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
    setpageNo(1);
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

  const paginationHandler = (pageNo) => {
    console.log(pageNo);
    if (searchRes.length < 1) return;
    setpageNo(pageNo);
  };
  //JSX
  return (
    <div className="App">
      <Header />
      <div className="search-filter">
        <Search changeHandler={changeHandler} />
        <Filter changeHandler={filterHandler} region={region} />
      </div>
      <div className="countries-container">
        <Countries data={searchRes} page={pageNo} />
      </div>
      <Paginations
        changeHandler={paginationHandler}
        resultsCount={searchRes.length}
      />
    </div>
  );
}

export default App;

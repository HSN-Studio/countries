import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Paginations from "./components/Paginations";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //States
  const [countries, setcountries] = useState(``);
  const [searchRes, setsearchRes] = useState(``);
  const [region, setregion] = useState(``);
  const [pageNo, setpageNo] = useState(1);
  const [darkMode, setdarkMode] = useState("");
  const [countrySelected, setcountrySelected] = useState("");
  const [countrySelectedName, setcountrySelectedName] = useState("");

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

  const darkModeHandler = () => {
    darkMode === "" ? setdarkMode("dark-mode") : setdarkMode("");
    document.body.classList.toggle("dark-mode-bg");
  };

  const selCountryHandler = (country) => {
    searchRes.filter((res) => {
      if (res.name.common.replace(" ", "-") === country) {
        setcountrySelected(res);
        setcountrySelectedName(country);
      }
    });
  };
  //JSX
  return (
    <Router>
      <div className="App">
        <Header clickHandler={darkModeHandler} darkMode={darkMode} />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <div className="search-filter">
              <Search changeHandler={changeHandler} darkMode={darkMode} />
              <Filter
                changeHandler={filterHandler}
                region={region}
                darkMode={darkMode}
              />
            </div>
            <div className="countries-container">
              <Countries
                data={searchRes}
                page={pageNo}
                darkMode={darkMode}
                handler={selCountryHandler}
              />
            </div>
            <Paginations
              changeHandler={paginationHandler}
              resultsCount={searchRes.length}
              darkMode={darkMode}
            />
          </Route>
          <Route>
            <CountryDetails
              exact
              path={`${process.env.PUBLIC_URL}/${countrySelectedName}`}
              data={countrySelectedName}
              darkMode={darkMode}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

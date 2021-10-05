import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

function CountryDetails({ data, darkMode }) {
  // States
  const [country, setcountry] = useState("");
  const countryName = data;
  const [lang, setlang] = useState("");
  const [currency, setcurrency] = useState("");
  // Lifecyle Methods
  useEffect(() => {
    loadCountry();
  }, []);
  // Regular Methods
  const loadCountry = function () {
    fetch(`https://restcountries.com/v3/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setcountry(data[0]);
        loadlang(data[0]);
        loadcurrency(data[0]);
        console.log(data[0]);
      });
  };

  const loadlang = (countryData) => {
    const languages = Object.entries(countryData.languages)
      .map((lang) => lang[1])
      .join(", ");
    setlang(languages);
  };

  const loadcurrency = (countryData) => {
    const currency = Object.entries(countryData.currencies)
      .map((cur) => cur[0])
      .join(", ");
    setcurrency(currency);
  };

  return (
    <div className={`country-details-container`}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <button className={`back-btn ${darkMode}`}>
          <BiArrowBack className="back-icon" />
          <p>Back</p>
        </button>
      </Link>
      {!country ? null : (
        <div className="country-data">
          <div className="left-col">
            <img src={country.flags[0]} alt="country-flag"></img>
          </div>
          <div className={darkMode ? `right-col dark-mode-text` : `right-col`}>
            <h2>{country.name.official}</h2>
            <div className="country-info">
              <div className="info-left">
                <p>
                  <b>Native Name: </b>
                  {country.name.common}
                  <br></br>
                  <b>Population: </b>
                  {country.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <br></br>
                  <b>Region: </b>
                  {country.region}
                  <br></br>
                  <b>Sub Region: </b>
                  {country.subregion}
                  <br></br>
                  <b>Capital: </b>
                  {country.capital}
                  <br></br>
                </p>
              </div>
              <div className="info-right">
                <p>
                  <b>Top Level Domain: </b>
                  {country.tld}
                  <br></br>
                  <b>Currencies: </b>
                  {!currency ? null : currency}
                  <br></br>
                  <b>Languages: </b>
                  {!lang ? null : lang}
                  <br></br>
                </p>
              </div>
            </div>
            <div className="b-c-container">
              <p>
                <b>Border Countries:</b>
              </p>
              {!country.borders
                ? "No Border Country."
                : country.borders.map((border) => {
                    return (
                      <button className={`b-country-btn ${darkMode}`}>
                        {border}
                      </button>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CountryDetails;

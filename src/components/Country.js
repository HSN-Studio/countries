import React from "react";

function Country({ data }) {
  return (
    <div className="country">
      <img alt="country-flag" src={data.flags[0]} className="flag"></img>
      <div className="country-details">
        <h2>{data.name}</h2>
        <div className="population">
          <p>
            <b>Population:</b> {data.population}
          </p>
        </div>
        <div className="region">
          <p>
            <b>Region:</b> {data.continent}
          </p>
        </div>
        <div className="capital">
          <p>
            <b>Capital:</b> {data.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Country;

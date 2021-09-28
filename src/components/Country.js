import React from "react";

function Country({ data }) {
  return (
    <div className="country">
      <img alt="country-flag" src={data.flags[0]} className="flag"></img>
      <div className="country-details">
        <h2>{data.name.common}</h2>
        <div className="population">
          <p>
            <b>Area:</b>{" "}
            {data.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " km2"}
          </p>
        </div>
        <div className="region">
          <p>
            <b>Region:</b> {data.region}
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

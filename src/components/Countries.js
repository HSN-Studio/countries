import React from "react";
import Country from "./Country";

function Countries({ data }) {
  if (!data) return null;

  const countries = data.map((country) => {
    return <Country data={country} />;
  });
  // Regular Methods
  const loadCountries = function (countries) {
    countries.map((country) => <Country country={country} />);
  };

  return countries;
}

export default Countries;

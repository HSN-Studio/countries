import React from "react";
import Country from "./Country";
function Countries({ data, page }) {
  if (!data) return null;
  const resPerPage = 25,
    start = (page - 1) * resPerPage,
    end = page * resPerPage;
  const dataPortion = data.slice(start, end);

  const countries = dataPortion.map((country) => {
    return <Country data={country} />;
  });
  // Regular Methods
  const loadCountries = function (countries) {
    countries.map((country) => <Country country={country} />);
  };

  return countries;
}

export default Countries;

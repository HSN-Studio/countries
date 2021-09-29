import React from "react";
import Country from "./Country";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function Search({ changeHandler }) {
  return (
    <div className="search-container">
      <BiSearchAlt2 className="search-icon" />
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={changeHandler}
      ></input>
    </div>
  );
}

export default Search;

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function Search({ changeHandler, darkMode }) {
  return (
    <div className="search-container">
      <BiSearchAlt2 className={`search-icon ${darkMode}`} />
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={changeHandler}
        className={`${darkMode}`}
      ></input>
    </div>
  );
}

export default Search;

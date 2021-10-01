import React, { useState } from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

function Filter({ changeHandler, region, darkMode }) {
  // States

  // Regular Functions

  return (
    <div className="filter">
      <FormControl
        fullWidth
        variant="outlined"
        sx={{ border: "none", outline: "none" }}
      >
        <InputLabel id="filter-label" className={`${darkMode}`}>
          Filter by Region:
        </InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={region}
          label="filter"
          onChange={changeHandler}
          className={`${darkMode}`}
        >
          <MenuItem value="None" className="menu-item" id="top">
            All Countries
          </MenuItem>
          <MenuItem value={"Africa"} className="menu-item">
            Africa
          </MenuItem>
          <MenuItem value={"Americas"} className="menu-item">
            America
          </MenuItem>
          <MenuItem value={"Asia"} className="menu-item">
            Asia
          </MenuItem>
          <MenuItem value={"Europe"} className="menu-item">
            Europe
          </MenuItem>
          <MenuItem value={"Oceania"} className="menu-item">
            Oceania
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;

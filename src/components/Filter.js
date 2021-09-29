import React, { useState } from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

function Filter({ changeHandler, region }) {
  // States

  // Regular Functions

  return (
    <div className="filter">
      <FormControl
        fullWidth
        variant="outlined"
        sx={{ border: "none", outline: "none" }}
      >
        <InputLabel id="filter-label">Filter by Region:</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={region}
          label="filter"
          onChange={changeHandler}
        >
          <MenuItem value="None">
            <em>None</em>
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

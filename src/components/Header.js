import React from "react";
import { RiMoonClearLine, RiMoonClearFill } from "react-icons/ri";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Where in the World?</h1>
      <button className="toggle">
        <RiMoonClearLine className="icon" />
        <p>Dark Mode</p>
      </button>
    </div>
  );
}

export default Header;

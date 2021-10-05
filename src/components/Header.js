import React from "react";
import { RiMoonClearLine, RiMoonClearFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header({ clickHandler, darkMode }) {
  return (
    <div className={`header ${darkMode}`}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <h1 className="title">Where in the World?</h1>
      </Link>
      <button className={`toggle ${darkMode}`} onClick={clickHandler}>
        {darkMode === "" ? (
          <RiMoonClearLine className="icon" />
        ) : (
          <RiMoonClearFill className="icon" />
        )}

        <p>Dark Mode</p>
      </button>
    </div>
  );
}

export default Header;

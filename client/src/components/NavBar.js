import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";

const Navbar = () => {

  };
  return (
    <nav className='navbar'>
      <h1>Sprint Players</h1>
      <div className='dark-mode__toggle'>
        <div onClick={toggleMode} className={darkMode ? "toggle toggled" : "toggle"} />
      </div>
    </nav>
  );
};

export default Navbar;

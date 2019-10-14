import React from "react";

import useDarkMode from "../hooks/useDarkMode";

const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkMode", false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup Trends</h1>
      <button onClick={toggleMode} className="dark__toggle">
        dark mode
      </button>
    </nav>
  );
};

export default Nav;

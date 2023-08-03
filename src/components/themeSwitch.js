import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


const ThemeSwitch = () => {
  const [theme, setTheme] = useState("fantasy");

  const sun = <FontAwesomeIcon icon={faSun} />;
  const moon = <FontAwesomeIcon icon={faMoon} />

  /**
   * This function is responsible for
   * toggling between light and dark modes.
   * It also saves the current mode to local storage. 
   */
  const changeTheme = () => {
    if (theme === "fantasy") {
      setTheme("business");
      localStorage.setItem("theme", "business");
    } else if (theme === "business") {
      setTheme("fantasy");
      localStorage.setItem("theme", "fantasy");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else setTheme("fantasy");
  }, []);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      className="btn btn-circle btn-info fixed top-6 right-6"
      onClick={changeTheme}
    >
      {theme === "fantasy" ? sun : moon}
    </button>
  )


};

export default ThemeSwitch;

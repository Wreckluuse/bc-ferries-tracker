import { React, useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("fantasy");

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
      className="fixed top-1 right-1 rounded-lg bg-accent px-3 py-1/2 hover:bg-accent-focus text-accent-content hover:shadow-2xl hover:-translate-y-px"
      onClick={changeTheme}
    >
      {theme === "fantasy" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeSwitch;

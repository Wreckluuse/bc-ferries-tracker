import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState, useEffect } from "react";

const ThemeSwitch = () => {
    const [theme, setTheme] = useState('winter');

    const changeTheme = () => {
        if (theme === 'winter') { setTheme('business') }
        else if (theme === 'business') setTheme('winter');
    }
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);    
    }, [theme])

    return (
        <button className="fixed top-1 right-1 rounded-lg bg-accent px-5 py-1/2" onClick={changeTheme}>
            {theme === "winter" ? "Light" : "Dark"}
        </button>
    )
}

export default ThemeSwitch
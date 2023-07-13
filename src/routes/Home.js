import { React, useState, useEffect } from "react";
import SearchBar from '../components/searchBar';
import ThemeSwitch from "../components/themeSwitch";
import Logo from "../components/logo";


function Home() {
    return (
        <div className="h-[100vh] w-[100vw] bg-base-100 grid grid-cols-3 grid-rows-3">
            <Logo />
            <ThemeSwitch />
            {/* <SearchBar /> */}
        </div>
    )
}

export default Home;
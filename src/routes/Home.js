import { React, useState, useEffect } from "react";
import SearchForm from '../components/searchForm';
import ThemeSwitch from "../components/themeSwitch";
import Logo from "../components/logo";

function Home() {
    return (
        <div className="h-[100vh] w-[100vw] bg-base-100 flex flex-col">
            <div className="h-[100px]">
                 <Logo />
                 <ThemeSwitch />
            </div>
            <div className="w-full flex-grow self-center align-center flex flex-col">
                <SearchForm />
            </div>
        </div>
    )
}

export default Home;
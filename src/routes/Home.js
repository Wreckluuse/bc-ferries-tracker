import { React, useState, useEffect } from "react";
import Steps from '../components/steps';
import ThemeSwitch from "../components/themeSwitch";
import Logo from "../components/logo";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="h-[100vh] w-[100vw] bg-base-100 flex flex-col">
            <div className="h-[100px]">
                 <Logo />
                 <ThemeSwitch />
                <div className="link fixed top-20 left-1 font-mono font-semibold"><Link to="/documentation">Documentation</Link></div>
            </div>
            <div className="w-full flex-grow self-center align-center flex flex-col">
                <Steps />
            </div>
        </div>
    )
}

export default Home;
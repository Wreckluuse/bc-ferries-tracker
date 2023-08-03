import { React } from "react";
import Logo from "../components/logo";
import ThemeSwitch from "../components/themeSwitch";
import { Link } from "react-router-dom";

const Documentation = () => {

    return (
        <div className="h-[100vh] bg-base-100 flex flex-col overflow-y-auto overflow-x-hidden pb-10">
            <div className="h-[100px]">
                <Logo />
                <ThemeSwitch />
                <div className="link fixed top-20 left-1 font-mono font-semibold"><Link to="/">Home</Link></div>
            </div>
            <div className="w-full flex-grow self-center align-center flex flex-col">
                <h1 className="font-mono font-semibold text-2xl text-center self-center">Documentation</h1>
                <div className="w-[30%] p-5 rounded-md shadow-2xl self-center align-center flex flex-col mt-20 bg-base-200">
                    <h4 className="font-mono font-semibold text-center self-center">Getting Started</h4>
                    <p className="self-center font-mono w-full text-center mt-10">   This application provides a straight-forward way to check the BC Ferries sailing times throughout the Lower Mainland.
                        To run it locally, simply download the project files and run 'npm start' from that directory or, run 'git clone https://github.com/wreckluuse/bc-ferries-tracker'
                        and then cd into the directory and run it from there.
                    </p>
                </div>
                <div className="w-[30%] p-5 rounded-md shadow-2xl self-center align-center flex flex-col mt-20 bg-base-200">
                    <h4 className="font-mono font-semibold text-center self-center">Usage</h4>
                    <p className="self-center font-mono w-full text-center mt-10">
                        To get started using the app, navigate to the landing page by clicking the home link or manually setting the URL endpoint to '/'.
                        from here simply follow the prompts to select departure and destination terminals. Once you have your terminals selected,
                        a table with all the sailings that match your query will be displayed. You may notice that sometimes when you pick a departure
                        terminal, you jump straight to the result table before picking a destination - don't worry, this just happens when the
                        selected terminal only has one possible destination.
                    </p>
                </div>
                <div className="w-[30%] p-5 rounded-md shadow-2xl self-center align-center flex flex-col mt-20 bg-base-200">
                    <h4 className="font-mono font-semibold text-center self-center">Components</h4>
                    <p className="self-center font-mono w-full text-center mt-10">
                        The app itself is composed of two main components: The series of steps that gets the data for our first api call,
                        and then a table that renders all of the data that is returned.  This table component also has two dropdowns that let
                        you update which route is being displayed on the fly. The last thing worth noting about the table component is that
                        you can click the link below it to look at the selected route on the official BC Ferries website.
                        The final component you may have noticed is the circular button in the top right corner of the screen. This component
                        toggles the theme of the application and stores the theme currently being used in local storage.
                    </p>
                </div>
                <div className="w-[30%] p-5 rounded-md shadow-2xl self-center align-center flex flex-col mt-20 bg-base-200">
                    <h4 className="font-mono font-semibold text-center self-center">Notes on the API</h4>
                    <p className="self-center font-mono w-full text-center mt-10">
                        The landing page for the API that this app interacts with can be found at <a className="link" href="https://www.bcferriesapi.ca/" target="_blank" rel="noopener noreferrer">www.bcferriesapi.ca</a>.
                        This api takes a departure terminal and destination terminal as arguments and returns a JSON object containing all the sailing times and details for that route.
                        The table component interacts with this API by building a URL with the terminals passed down through props, allowing us to get any route we need.
                    </p>
                </div>
                <div className="w-[30%] p-5 rounded-md shadow-2xl self-center align-center flex flex-col mt-20 bg-base-200">
                    <h4 className="font-mono font-semibold text-center self-center">Packages and Dependencies</h4>
                    <p className="self-center font-mono w-full text-center mt-10">
                        While I did not end up using many extra packages or libraries outside of base React, I did use <a className="link" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</a> to style the app
                        and <a className="link" href="https://daisyui.com/" target="_blank" rel="noopener noreferrer">DaisyUI</a> for my light/dark themes plus a few components such as the buttons and the table.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Documentation;
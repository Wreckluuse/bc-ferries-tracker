import React from "react";
import { ferryRoutes } from "../ferryRoutes";
// rotating cards with each step
const SearchForm = () => {

    // const getDeparture = (input) => {
        // localStorage.setItem("departure", input.value);
    // };
// 
    // const getDestination = (input) => {
        // localStorage.setItem("destination", input.value)
    // };
// 
    // const getDepartureTime = (input) => {
        // localStorage.setItem
    // };

    const getInput = (input) => {
        localStorage.setItem(input.name, input.value);
    };

    const displayResults = () => {

    };

    const updateResults = () => {

    };

    return (
        <div className="items-center h-full">
            <div className="h-full rounded-lg flex flex-col overflow-x-hidden" id="form-container">
                <div className="flex flex-col h-full">
                    <div className="text-center flex flex-col align-center items-center h-full transition-opacity">
                        <h3 className="text-center">Where are you departing from?</h3>
                        <div className="grid grid-cols-3 h-[40%] w-[70%] ml-auto mr-auto mt-20 gap-12">
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.TSAWASSEN}>Tsawassen</button>
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.SWARTZ_BAY}>Swartz Bay</button>
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.SOUTHERN_GULF_ISLANDS}>Gulf Islands</button>
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.DUKE_POINT}>Duke Point</button>
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.SALTSPRING_ISLAND}>Saltspring Island</button>
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.HORSESHOE_BAY}>Horseshoe Bay</button>
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.NANAIMO}>Nanaimo</button>
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.LANGFORD}>Langford</button>
                            <button name="departure" className="text-center border rounded-md bg-primary hover:bg-primary-focus text-primary-content" click={getInput(this)} value={ferryRoutes.BOWEN_ISLAND}>Bowen Island</button>
                        </div>
                    </div>
                    <div className="text-center hidden align-top items-center transition-opacity">
                        <h3 className="text-center align-top mt-2 w-full">Where are you going?</h3>
                    </div>
                    <div className="text-center hidden align-top items-center">
                        <h3 className="text-center w-full hidden">When would you prefer to leave?</h3>
                        <input className="hidden" type="date"></input>
                    </div>
                    <div id="results" className="hidden"></div>
                </div>
                <ul className="steps h-[40%] w-full">
                    <li className="text-primary step step-primary">Departure</li>
                    <li className="text-neutral-content step step-neutral-content">Destination</li>
                    <li className="text-neutral-content step step-neutral-content">Date</li>
                    <li className="text-neutral-content step step-neutral-content">Time</li>
                    <li className="text-neutral-content step step-neutral-content">Results</li>
                </ul>
            </div>
        </div>
    )
};

export default SearchForm;

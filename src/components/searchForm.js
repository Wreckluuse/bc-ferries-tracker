import React, { useEffect, useState, useRef } from "react";
import { ferryRoutes, validRoutes } from "../ferryRoutes";
import FerryTable, { ferryTable } from './ferryTable';
import { a } from "@react-spring/web";

const SearchForm = () => {
  const [step, renderStep] = useState()
  const [currentStep, setStep] = useState(0);
  const [departureTerminal, setDepartureTerminal] = useState("");
  const [destinationTerminal, setDestinationTerminal] = useState("");
  const [showingResults, setShowResults] = useState(false);

  const nextStep = () => {
    setStep(currentStep + 1);
  };

  const getInput = (event) => {
    switch (event.target.name) {
      case "departure":
        setDepartureTerminal(event.target.value);
        if (departureTerminal != "TSA" && departureTerminal != "SWB" && departureTerminal != "HSB") {
          setStep(3)
        } else {
          nextStep()
        }
        break;
      case "destination":
        setDestinationTerminal(event.target.value);
        nextStep()
        break;
      default:
        break;
    }
  };

  const welcome = (
    <div className="flex flex-col h-[50%] gap-16 mt-[25vh]">
      <h3 className="text-center ">
        To start searching for ferries, click the button below!
      </h3>

      <button
        id="getStarted"
        className="self-center w-[20%] px-2 text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
        onClick={() => {
          nextStep();
        }}
      >
        Get Started
      </button>
    </div>
  );

  const selectDeparture = (
    <div
      className="text-center flex-col align-center items-center h-full"
    >
      <h3 className="text-center">Where are you leaving from?</h3>
      <div className="grid grid-cols-2 h-[25%] w-[50%] ml-auto mr-auto mt-[8%] gap-12">
        <button
          name="departure"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
          onClick={getInput}
          value={ferryRoutes.TSAWASSEN}
        >
          Tsawassen
        </button>
        <button
          name="departure"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
          onClick={getInput}
          value={ferryRoutes.SWARTZ_BAY}
        >
          Swartz Bay
        </button>
        <button
          name="departure"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-75"
          onClick={getInput}
          value={ferryRoutes.DUKE_POINT}
        >
          Duke Point
        </button>
        <button
          name="departure"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-125"
          onClick={getInput}
          value={ferryRoutes.HORSESHOE_BAY}
        >
          Horseshoe Bay
        </button>
        <button
          name="departure"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-150"
          onClick={getInput}
          value={ferryRoutes.NANAIMO}
        >
          Nanaimo
        </button>
        <button
          name="departure"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-175"
          onClick={getInput}
          value={ferryRoutes.LANGDALE}
        >
          Langdale
        </button>
        <button
          name="departure"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-200"
          onClick={getInput}
          value={ferryRoutes.BOWEN_ISLAND}
        >
          Bowen Island
        </button>
        <button
          name="departure"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-200"
          onClick={getInput}
          value={ferryRoutes.FULFORD_HARBOUR}
        >
          Saltspring Island
        </button>
      </div>
    </div>
  );

  const selectDestination = (
    <div
      className="text-center flex-col align-center items-center h-full"
    >
      <h3 className="text-center align-top mt-2 w-full">
        Where are you going?
      </h3>
      <div className="flex flex-col h-[25%] w-[50%] ml-auto mr-auto mt-[8%] gap-12">
        {departureTerminal === "SWB" || departureTerminal === "SGI" || "departureTerminal" === "DUK" ?
          <button
            name="destination"
            className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
            onClick={getInput}
            value={ferryRoutes.TSAWASSEN}
          >
            Tsawassen
          </button>
          : null
        }
        {departureTerminal === "TSA" || departureTerminal === "FUL" ?
          <button
            name="destination"
            className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
            onClick={getInput}
            value={ferryRoutes.SWARTZ_BAY}
          >
            Swartz Bay
          </button>
          : null
        }
        {departureTerminal === "TSA" ?
          <button
            name="destination"
            className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-75"
            onClick={getInput}
            value={ferryRoutes.DUKE_POINT}
          >
            Duke Point
          </button>
          : null
        }
        {departureTerminal === "LNG" || departureTerminal === "NAN" || departureTerminal === "BOW" ?
          <button
            name="destination"
            className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-125"
            onClick={getInput}
            value={ferryRoutes.HORSESHOE_BAY}
          >
            Horseshoe Bay
          </button>
          : null
        }
        {/* {departureTerminal === "HSB" ?
          <button
            className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-150"
            onClick={getInput}
            value={ferryRoutes.NANAIMO}
          >
            Nanaimo
          </button>
          : null
        }
        {departureTerminal === "HSB" ?
          <button
            name="destination"
            className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-175"
            onClick={getInput}
            value={ferryRoutes.LANGDALE}
          >
            Langdale
          </button>
          : null
        }
        {departureTerminal === "HSB" ?
          <button
            name="destination"
            className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-200"
            onClick={getInput}
            value={ferryRoutes.BOWEN_ISLAND}
          >
            Bowen Island
          </button>
          : null
        }
        {departureTerminal === "SWB" ?
          <button
            name="destination"
            className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-200"
            onClick={getInput}
            value={ferryRoutes.FULFORD_HARBOUR}
          >
            Saltspring Island
          </button>
          : null
        } */}

      </div>
    </div>
  );

  const results = <FerryTable departure={departureTerminal} destination={destinationTerminal}></FerryTable>
  const steps = [welcome, selectDeparture, selectDestination, results];

    // useEffect(() => {
    //   if (departureTerminal === "TSA" || departureTerminal === "SWB" || departureTerminal === "HSB") {
    //     setShowResults(false)
    //   } else setShowResults(true)
    // }, [departureTerminal])

    return (
      <div className="justify-center h-full">
        <div
          className="h-full rounded-lg flex flex-col overflow-x-hidden"
          id="form-container"
        >
          <div className="flex flex-col h-full">{steps[currentStep]}</div>
          {currentStep === 0 ? null : (
            <ul className="steps h-[20%] w-full text-xl">
              <li
                id="step_1"
                className={
                  currentStep === 1
                    ? "text-secondary step step-primary transition-colors duration-500"
                    : "text-neutral step step-neutral-content transition-colors duration-500"
                }
              >
                Departure
              </li>
              <li
                id="step_2"
                className={
                  currentStep === 2
                    ? "text-secondary step step-primary transition-colors duration-500"
                    : "text-neutral step step-neutral-content transition-colors duration-500"
                }
              >
                Destination
              </li>
              <li
                id="step_3"
                className={
                  currentStep === 3
                    ? "text-secondary step step-primary transition-colors duration-500"
                    : "text-neutral step step-neutral-content transition-colors duration-500"
                }
              >
                Results
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  };

  export default SearchForm;

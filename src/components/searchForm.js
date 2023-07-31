import React, { useEffect, useState, useRef } from "react";
import { ferryRoutes } from "../ferryRoutes";
import { CSSTransition } from "react-transition-group";
import FerryTable, { ferryTable } from './ferryTable';

const SearchForm = () => {
  const [currentStep, setStep] = useState(0);
  const [departureTerminal, setDepartureTerminal] = useState("");
  const [destinationTerminal, setDestinationTerminal] = useState("");
  const [welcomeIn, setWelcomeIn] = useState(true);
  const [departureIn, setDepartureIn] = useState(false);
  const [destinationIn, setDestinationIn] = useState(false);

  const nodeRef = useRef(null);

  const nextStep = () => {
    setStep(currentStep + 1);
  };

  const getInput = (event) => {
    setDestinationTerminal(event.target.value);
    nextStep();
  };

  const jumpTo = (event) => {
    switch (event.target.id) {
      case "step_1":
        setStep(1);
        break;
      case "step_2":
        setStep(2);
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
      ref={nodeRef}
      className="text-center flex-col align-center items-center h-full"
    >
      <h3 className="text-center">Where are you going?</h3>
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
      <div className="grid grid-cols-2 h-[25%] w-[50%] ml-auto mr-auto mt-[8%] gap-12">
        <button
          name="destination"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
          onClick={getInput}
          value={ferryRoutes.TSAWASSEN}
        >
          Tsawassen
        </button>
        <button
          name="destination"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
          onClick={getInput}
          value={ferryRoutes.SWARTZ_BAY}
        >
          Swartz Bay
        </button>
        <button
          name="destination"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-50"
          onClick={getInput}
          value={ferryRoutes.SOUTHERN_GULF_ISLANDS}
        >
          Gulf Islands
        </button>
        <button
          name="destination"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-75"
          onClick={getInput}
          value={ferryRoutes.DUKE_POINT}
        >
          Duke Point
        </button>
        <button
          name="destination"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-125"
          onClick={getInput}
          value={ferryRoutes.HORSESHOE_BAY}
        >
          Horseshoe Bay
        </button>
        <button
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-150"
          onClick={getInput}
          value={ferryRoutes.NANAIMO}
        >
          Nanaimo
        </button>
        <button
          name="destination"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-175"
          onClick={getInput}
          value={ferryRoutes.LANGDALE}
        >
          Langdale
        </button>
        <button
          name="destination"
          className="text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px transition-opacity delay-200"
          onClick={getInput}
          value={ferryRoutes.BOWEN_ISLAND}
        >
          Bowen Island
        </button>
      </div>
    </div>
  );

  const results = <FerryTable destination={destinationTerminal}></FerryTable>

  const steps = [welcome, selectDestination, results];

  return (
    <div className="justify-center h-full">
      <div
        className="h-full rounded-lg flex flex-col overflow-x-hidden"
        id="form-container"
      >
        <div className="flex flex-col h-full">{steps[currentStep]}</div>
        {/* {currentStep === 0 ? null : (
          <ul className="steps h-[20%] w-full text-xl">
            <li
              id="step_1"
              onClick={jumpTo}
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
              onClick={jumpTo}
              className={
                currentStep === 2
                  ? "text-secondary step step-primary transition-colors duration-500"
                  : "text-neutral step step-neutral-content transition-colors duration-500"
              }
            >
              Destination
            </li>
            <li
              className={
                currentStep === 3
                  ? "text-secondary step step-primary transition-colors duration-500"
                  : "text-neutral step step-neutral-content transition-colors duration-500"
              }
            >
              Results
            </li>
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default SearchForm;

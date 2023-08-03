import React, { useEffect, useState } from "react";
import { ferryRoutes, ferryNames, routesArray, allRoutes } from "../ferryRoutes";
import FerryTable from './ferryTable';

const Steps = () => {
  const [currentStep, setStep] = useState(0);
  const [departureTerminal, setDepartureTerminal] = useState("");
  const [destinationTerminal, setDestinationTerminal] = useState("");

  /**
   * This whole component works off of the currentStep state. there is an array of elements called 'steps'
   * and we use the value of currentStep as the index to determine which component is being rendered.
   *
   */
  const nextStep = () => {
    setStep(currentStep + 1);
  };

  /**
   * This function is called whenever any of the buttons in the steps are selected.
   * It uses a switch statement to decide what happens by evaluating which 'step' we are on.
   * 
   * @param {any} event 
   */
  const getInput = (event) => {
    switch (currentStep) {
      case 1:
        setDepartureTerminal(event.target.value);
        break;
      case 2:
        setDestinationTerminal(event.target.value);
        break;
      default:
        break;
    }
  };

  /**
   * The first element in the 'steps' array.
   * 
   */
  const welcome = (
    <div className="flex flex-col h-[50%] gap-16 mt-[25vh]">
      <h3 className="text-center font-mono font-medium">
        To start searching for ferries, click the button below!
      </h3>

      <button
        id="getStarted"
        className="btn self-center w-[20%] px-2 text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
        onClick={() => {
          nextStep();
        }}
      >
        Get Started
      </button>
    </div>
  );

  /**
   * The second element in the steps array.
   * This element is responsible for collecting the
   * departure terminal.
   */
  const selectDeparture = (
    <div
      className="text-center flex-col align-center items-center h-full"
    >
      <h3 className="text-center font-mono font-medium">Where are you leaving from?</h3>
      <div className="grid grid-cols-2 h-[25%] w-[50%] ml-auto mr-auto mt-[8%] gap-12">
        {
          Object.keys(ferryNames).map((val, key) => {
            return (
              <button
                key={key}
                className="btn text-center rounded-md bg-primary shadow-md text-primary-content hover:bg-primary-focus hover:shadow-2xl hover:-translate-y-px"
                onClick={getInput}
                value={val}
              >
                {ferryNames[val]}
              </button>
            )
          })
        }
      </div>
    </div>
  );

  /**
   * This is the third element in the steps array.
   * This element is responsible for getting the
   * destination terminal, and uses conditional rendering
   * to display only the terminals we can access based on our
   * departure terminal.
   */
  const selectDestination = (
    <div
      className="text-center flex-col align-center items-center h-full"
    >
      <h3 className="text-center align-top mt-2 w-full font-mono font-medium">
        Where are you going?
      </h3>
      <div className="flex flex-col h-[25%] w-[30%] ml-auto mr-auto mt-[8%] gap-12">
        {departureTerminal === "TSA" ?
          <>
            <button
              name="destination"
              className="btn btn-secondary text-center rounded-md shadow-md text-primary-content hover:shadow-2xl hover:-translate-y-px"
              onClick={getInput}
              value={ferryRoutes.SWARTZ_BAY}
            >
              Swartz Bay
            </button>
            <button
              name="destination"
              className="btn btn-secondary text-center rounded-md shadow-md text-primary-content hover:shadow-2xl hover:-translate-y-px transition-opacity delay-75"
              onClick={getInput}
              value={ferryRoutes.DUKE_POINT}
            >
              Duke Point
            </button>
          </>
          : null
        }
        {departureTerminal === "HSB" ?
          <>
            <button
              className="btn btn-secondary text-center rounded-md shadow-md text-primary-content hover:shadow-2xl hover:-translate-y-px transition-opacity delay-150"
              onClick={getInput}
              value={ferryRoutes.NANAIMO}
            >
              Nanaimo
            </button>
            <button
              name="destination"
              className="btn btn-secondary text-center rounded-md shadow-md text-primary-content hover:shadow-2xl hover:-translate-y-px transition-opacity delay-175"
              onClick={getInput}
              value={ferryRoutes.LANGDALE}
            >
              Langdale
            </button>
            <button
              name="destination"
              className="btn btn-secondary text-center rounded-md shadow-md text-primary-content hover:shadow-2xl hover:-translate-y-px transition-opacity delay-200"
              onClick={getInput}
              value={ferryRoutes.BOWEN_ISLAND}
            >
              Bowen Island
            </button>
          </>
          : null
        }
        {departureTerminal === "SWB" ?
          <>
            <button
              name="destination"
              className="btn btn-secondary text-center rounded-md shadow-md text-primary-content hover:shadow-2xl hover:-translate-y-px"
              onClick={getInput}
              value={ferryRoutes.TSAWASSEN}
            >
              Tsawassen
            </button>
            <button
              name="destination"
              className="btn btn-secondary text-center rounded-md shadow-md text-primary-content hover:shadow-2xl hover:-translate-y-px transition-opacity delay-200"
              onClick={getInput}
              value={ferryRoutes.FULFORD_HARBOUR}
            >
              Saltspring Island
            </button>
          </>
          : null
        }
      </div>
    </div>
  );

  const results = <FerryTable departure={departureTerminal} destination={destinationTerminal}></FerryTable>
  const steps = [welcome, selectDeparture, selectDestination, results]; // This is the steps array reffered to above.

  //This effect checks to see if our departure terminal has more than one route.
  //If it only has one route it will jump to the results table, otherwise it
  //continues on to recieve the destination.
  useEffect(() => {
    if (departureTerminal !== "") {
      if (departureTerminal !== "TSA" && departureTerminal !== "SWB" && departureTerminal !== "HSB") {
        setStep(3)
      } else setStep(2)
    }
  }, [departureTerminal])

  useEffect(() => {
    if (destinationTerminal !== "") {
      setStep(3)
    }
  }, [destinationTerminal])

  return (
    <div className="justify-center h-full">
      <div
        className="h-full rounded-lg flex flex-col overflow-x-hidden"
        id="form-container"
      >
        <div className="flex flex-col h-full">{steps[currentStep]}</div>
        {(currentStep === 0 || currentStep === 3) ? null : (
          <ul className="steps h-[20%] w-full text-xl fixed bottom-0 self-center">
            <li
              id="step_1"
              className={
                currentStep >= 1
                  ? "text-secondary step step-primary transition-colors duration-500"
                  : "text-neutral step step-neutral-content transition-colors duration-500"
              }
            >
              Departure
            </li>
            <li
              id="step_2"
              className={
                currentStep >= 2
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

export default Steps;

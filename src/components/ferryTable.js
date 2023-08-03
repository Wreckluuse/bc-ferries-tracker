import React, { useEffect } from "react";
import { useState } from "react";
import { ferryNames, soloRoutes, allRoutes } from "../ferryRoutes";

const FerryTable = (props) => {

    const [departure, updateDeparture] = useState(props.departure)
    const [destination, updateDestination] = useState(props.destination);
    const [sailings, updateSailings] = useState();

    /**
     * This function takes a departure and destination location as arguments,
     * then constructs a url, makes a call to the api with said url and updates
     * the 'sailings' state.
     * 
     * @param {string} departure 
     * @param {string} destination 
     */
    const fetchSchedule = (departure, destination) => {
        let URL = `https://www.bcferriesapi.ca/api/${departure}/${destination === "" ? soloRoutes[departure] : destination}/`;

        fetch(URL).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            updateSailings(data.sailings);
        }).catch(e => {
            console.error(e);
        })
    }

    /**
     *This function sets the departure state
     *  
     * @param {string} event 
     */
    const getNewDeparture = (event) => {
        updateDeparture(event.target.value)
    }

    /**
     * This function sets the destination state
     * 
     * @param {string} event 
     */
    const getNewDestination = (event) => {
        updateDestination(event.target.value);
    }

    useEffect(() => {
        fetchSchedule(departure, destination);
    }, [departure, destination])

    useEffect(() => {
        Object.keys(soloRoutes).forEach((key) => {
            if (departure === key) updateDestination(soloRoutes[key])
        })
    }, [departure, destination])

    return (
        <div className="h-full w-full flex flex-col content-center">
            <div className="mt-2 self-center mb-10 h-fit text- text-center p-2 rounded-lg font-medium">{/* {`From ${ferryNames[departure]} to ${destination === "" ? ferryNames[soloRoutes[departure]] : ferryNames[destination]}`} */}
                <div className="flex flex-row self-center mt-2 gap-2">
                    <p className="self-center font-mono font-bold">FROM</p>
                    {<details className="dropdown dropdown-hover">
                        <summary className="btn btn-sm btn-primary">
                            {ferryNames[departure]}
                        </summary>
                        <ul className="shadow menu z-[1] dropdown-content bg-base-100 rounded-box">
                            {Object.keys(ferryNames).map((val, key) => {
                                return (
                                    <li key={key}><button value={val} onClick={getNewDeparture}>{ferryNames[val]}</button></li>
                                )
                            })
                            }
                        </ul>
                    </details>}
                    <p className="self-center font-mono font-bold">
                        TO
                    </p>
                    {<details className="dropdown">
                        <summary className="btn btn-sm btn-secondary">
                            {ferryNames[destination]}
                        </summary>
                        <ul className="shadow menu z-[1] dropdown-content bg-base-100 rounded-box">
                            {allRoutes[departure].map((val, key) => {
                                return (
                                    <li key={key}><button value={val} onClick={getNewDestination}>{ferryNames[val]}</button></li>
                                )
                            })}
                        </ul>
                    </details>}
                </div>
            </div>
            <div className="self-center h-[70%] w-fit overflow-y-auto flex">
                <table className="table justify-center self-center w-max shadow-md">
                    {sailings ? <>
                        <thead className="text-center">
                            <tr className="border-b-2 border-gray-500">
                                <th>
                                    Departure Time
                                </th>
                                <th>
                                    Vessel
                                </th>

                                <th>
                                    Vehicle Occupancy
                                </th>
                                <th>
                                    Walk-on Occupancy
                                </th>
                                <th>
                                    Cancellation Status
                                </th>
                            </tr>
                            {sailings.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.time}</td>
                                        <td>{val.vesselName}</td>

                                        {val.carFill >= 75 ?
                                            <td className="text-red-700">{`${val.carFill}%`}</td>
                                            : <td className="text-green-600">{`${val.carFill}%`}</td>
                                        }
                                        {val.fill >= 75 ?
                                            <td className="text-red-700">{`${val.fill}%`}</td>
                                            : <td className="text-green-600">{`${val.fill}%`}</td>
                                        }
                                        {val.isCancelled ?
                                            <td className="text-red-700">Cancelled</td>
                                            : <td className="text-green-600">OK</td>
                                        }
                                    </tr>
                                )
                            })}
                        </thead>
                        <tbody>
                        </tbody>
                    </>
                        : null
                    }
                </table>
            </div >
            <p className="text-center">
                Click
                <a className="self-center text-secondary hover:text-secondary-focus hover:-translate-y-1 hover:underline font-bold" target="_blank" rel="noopener noreferrer" href={`https://www.bcferries.com/routes-fares/schedules/daily/${departure}-${destination === "" ? soloRoutes[departure] : departure}`}> here </a>
                to view these sailings on the official BC Ferries website.
            </p>

        </div>
    )
}

export default FerryTable;
import React, { useEffect } from "react";
import { useState } from "react";

const FerryTable = (props) => {

    const [departure, updateDeparture] = useState(props.departure)
    const [destination, updateDestination] = useState(props.destination);
    const [sailings, updateSailings] = useState({});

    const fetchSchedule = (departure, destination) => {
        fetch('https://www.bcferriesapi.ca/api/' + departure + '/' + destination).then(response => {
            return response.json()
        }).then(data => {
            updateSailings(data);
        }).catch(e => {
            console.error(e);
        })
    }

    useEffect(() => {
        fetchSchedule(departure, destination);
    }, [departure, destination])

    useEffect(() => {
        console.info(sailings)
    }, [sailings])

    return <table className="self-center border-separate border-spacing-2">
        <thead>
            <tr>
                <th>
                    Departure Terminal
                </th>
                <th>
                    Destination Terminal
                </th>
                <th>
                    Sailing Time
                </th>
                <th>
                    Vessel
                </th>
                <th>
                    Cancellation Status
                </th>
                <th>
                    Vehicle Occupancy
                </th>
                <th>
                    Walk-on Occupancy
                </th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>
}

export default FerryTable;
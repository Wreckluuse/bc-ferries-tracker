import React, { useEffect } from "react";
import { useState } from "react";

const FerryTable = (props) => {

    const [sailings, updateSailings] = useState([]);

        if (props.destination != "") {
            const url = `https://bcferriesapi.ca/api/${props.destination}/`;
            fetch(url, { mode: 'no-cors' }).then(response => {
                response.json()
            }).then(data => {
                updateSailings(data)
            })
        }

    return <table className="self-center border-separate border-spacing-2">

    </table>
}

export default FerryTable;
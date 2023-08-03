//These constants are used throughout the application to help with things such as constructing
//the url when an api call is made, and all of the logic for conditional rendering.


export const ferryRoutes = {
 TSAWASSEN: "TSA",
 SWARTZ_BAY: "SWB",
 DUKE_POINT: "DUK",
 HORSESHOE_BAY: "HSB",
 NANAIMO: "NAN",
 LANGDALE: "LNG",
 BOWEN_ISLAND: "BOW",
 FULFORD_HARBOUR: "FUL"
}

export const ferryNames = {
    "TSA": "Tsawassen",
    "SWB": "Swartz Bay",
    "DUK": "Duke Point",
    "HSB": "Horseshoe Bay",
    "NAN": "Nanaimo",
    "LNG": "Langdale",
    "BOW": "Bowen Island",
    "FUL": "Fulford Harbour"
}

export const soloRoutes = {
    "DUK" : "TSA",
    "LNG" : "HSB",
    "NAN" : "HSB",
    "FUL" : "SWB",
    "BOW" : "HSB"
}

export const allRoutes = {
    "TSA": [
        "SWB",
        "DUK"
    ],
    "SWB": [
        "TSA",
        "FUL"
    ],
    "HSB": [
        "NAN",
        "LNG",
        "BOW"
    ],
    "DUK": [
        "TSA"
    ],
    "LNG": [
        "HSB"
    ],
    "NAN": [
        "HSB"
    ],
    "FUL": [
        "SWB"
    ],
    "BOW": [
        "HSB"
    ]
}

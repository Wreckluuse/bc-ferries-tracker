import React from "react";

const SearchBar = () => {
 return (
    <div className="col-start-2 col-span-1 row-start-2 row-end-3 items-center" id="searchWrapper">
        <input type="text" className="h-[10%] w-full rounded-md text-center mt-20 text-primary-content bg-primary"></input>
    </div>
 )
};

export default SearchBar;

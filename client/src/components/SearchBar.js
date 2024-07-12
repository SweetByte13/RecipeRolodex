import React from "react";

function Search({setSearchRecipe}) {
    return (
        <div className="searchbar">
            <label className="searchlabel" htmlFor="search">Search by Recipe:&nbsp;</label>
            <input 
                className="searchinput"
                type="text"
                id="search"
                placeholder="Search for a recipe... "
                onChange={(e) => setSearchRecipe(e.target.value)}
            />
        </div>
    );
}
export default Search;
import React, { useState, useEffect } from "react";


function RecipeFilter({ recipes = {}}) {

    const [filter, setFilter] = useState("");

    function handleChangeFilter(event) {
        const value = event.currentTarget.value
        console.log(value)
        console.log(recipes)
        setFilter(value);
        if (recipes && recipes.recipe_users) {
            if (value === "all") {
                return true;
            } else if (value === "liked") {
                return recipes.recipe_users.creator[false];
            } else if (value === "created") {
                return recipes.recipe_users.creator[true];
            }
        }
    }
    return (
        <div className="dropdown">
            <label className="filter" htmlFor="filter">Category:&nbsp;</label>
            <select className="select" name="filter" onChange={handleChangeFilter}>
                <option value="">Filter By:</option>
                <option value="all">All</option>
                <option value="liked">Liked</option>
                <option value="created">Created</option>
            </select>
        </div>
    );
}
export default RecipeFilter;
import React, { useState, useEffect } from "react";


function RecipeFilter({ setRecipes, recipes, setFilteredRecipes }) {

    const [filter, setFilter] = useState("");

    function handleChangeFilter(event) {
        const value = event.currentTarget.value;
        console.log(value);
        // setFilter(value);
        // if (value === "" || value === "all") {
        //     setFilteredRecipes(recipes);
        // } else if (value === "liked") {
        //     const filteredRecipes = recipes.filter(recipe => recipe.recipe_user && recipe.recipe_user.creator === false);
        //     console.log(filteredRecipes);
        //     setFilteredRecipes(filteredRecipes);
        // } else if (value === "created") {
        //     const filteredRecipes = recipes.filter(recipe => recipe.recipe_user && recipe.recipe_user.creator === true);
        //     console.log(filteredRecipes);
        //     setFilteredRecipes(filteredRecipes);
        // }
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
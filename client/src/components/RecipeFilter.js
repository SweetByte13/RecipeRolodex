import React, { useState, useEffect } from "react";
import { ChevronDoubleLeft } from "react-bootstrap-icons";


function RecipeFilter({ setRecipes, recipes, setFilteredRecipes, id }) {

    const [filter, setFilter] = useState("");

    function handleChangeFilter(event) {
        const value = event.currentTarget.value;
        console.log(value);
        console.log(recipes)
        console.log(id)
        setFilter(value);
        if (value === "" || value === "all") {
            setFilteredRecipes(recipes);
        } else if (value === "liked") {
            const filteredRecipes = recipes.filter(recipe => {
                return recipe.recipe_users.some((ru) => parseInt(ru.user_id) === parseInt(id) && ru.creator === false)});
            setFilteredRecipes(filteredRecipes);
        } else if (value === "created") {
            const filteredRecipes = recipes.filter(recipe => {
                return recipe.recipe_users.some((ru) => parseInt(ru.user_id) === parseInt(id) && ru.creator === true)});
            setFilteredRecipes(filteredRecipes);
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
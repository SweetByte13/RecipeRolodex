import React, { useState, useEffect } from "react";

function CategoryFilter({ setRecipes, recipes, setFilteredRecipes }) {
    const [filter, setFilter] = useState("");

    function handleChangeFilter(event) {
        const value = event.currentTarget.value
        console.log(value)
        setFilter(value);
        if (value === "") {
            setFilteredRecipes(recipes);
        } else {
            const filteredRecipes = recipes.filter(recipe => recipe.category === value);
            console.log(filteredRecipes)
            setFilteredRecipes(filteredRecipes);
        }
    }

    return (
        <div className="dropdown">
            <label className="filter" htmlFor="filter">Category:&nbsp;</label>
            <select className="select" name="filter" onChange={handleChangeFilter}>
                <option value="">Select a category:</option>
                <option value="appetizers">Appetizers</option>
                <option value="soups">Soups</option>
                <option value="salads">Salads</option>
                <option value="main dishes">Main Dishes</option>
                <option value="side dishes">Side Dishes</option>
                <option value="bread">Breads</option>
                <option value="desserts">Desserts</option>
                <option value="candies">Candies</option>
                <option value="snacks">Snacks</option>
                <option value="beverages">Beverages</option>
                <option value="condiments">Condiments</option>
            </select>
        </div>
    )
}
export default CategoryFilter;

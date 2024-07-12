import React, { useState } from "react";

function CategoryFilter({ recipes, setFilteredRecipes }) {
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
                <option value="Appetizers">Appetizers</option>
                <option value="Soups">Soups</option>
                <option value="Salads">Salads</option>
                <option value="Main Dishes">Main Dishes</option>
                <option value="Side Dishes">Side Dishes</option>
                <option value="Breads">Breads</option>
                <option value="Desserts">Desserts</option>
                <option value="Candies">Candies</option>
                <option value="Snacks">Snacks</option>
                <option value="Beverages">Beverages</option>
                <option value="Condiments">Condiments</option>
            </select>
        </div>
    );
}
export default CategoryFilter;

import React, { useEffect, useState } from "react";

function GroceryList() {
    const [groceryItems, setGroceryItems] = useState([])

    useEffect(() => {
        let groceryList = JSON.parse(localStorage.getItem("groceryList")) || []
        setGroceryItems(groceryList)
        console.log(groceryList)
    }, [])

    const item = groceryItems.map((gi) => (
        gi.recipe_ingredients.map((ri) => (
                <li>{ri.ingredient?.name} : {ri.weight_of_ingr}{ri.weight_type}</li>
        ))
    ));
    
    return (
            <div>
                {item.flat()}  
            </div>
    );
}
export default GroceryList
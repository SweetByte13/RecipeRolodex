import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";


function GroceryList() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();

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
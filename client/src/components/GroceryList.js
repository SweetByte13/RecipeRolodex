import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";

function GroceryList( { recipes } ) {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();
    
    const groceryItems = []

    // useEffect(() => {
    //     const items = Object.keys(localStorage)
    //     const itemComponents = items.map(item => {
    //         let ingredient = JSON.parse(item)
    //         groceryItems.push(ingredient)
    //         return(
    //             <div key={ingredient.id}>{ingredient.name}</div>
    //         )
    //     })
    // },[])

        // function handleClearList() {
        //     localStorage.clear();
        // }

    return (
        <div>
            {groceryItems}
        </div>
    );
}
export default GroceryList
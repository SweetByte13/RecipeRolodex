import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/Context";
import RecipeCard from "../components/RecipeCard";
import Stack from 'react-bootstrap/Stack';


function RecipeContainer({recps}) {
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    const recipe = recps.map((recipe) => {
        return (
            <div key={recipe.idx}>
                <RecipeCard key={recipe.id} recipe={recipe}/>
            </div>
        )
    })
    console.log(recipe)
    return(
        <div>
            <Stack className="recipe-stack" gap={4}>
                {recipe}
            </Stack>
        </div>
    )
}
export default RecipeContainer;
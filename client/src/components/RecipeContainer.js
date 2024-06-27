import React from "react";
import RecipeCard from "../components/RecipeCard";
import Stack from 'react-bootstrap/Stack';


function RecipeContainer({recps}) {

    const recipe = recps.map((recipe) => {
        return (
            <div key={recipe.idx}>
                <RecipeCard key={recipe.id} recipe={recipe}/>
            </div>
        )
    })

    return(
        <div>
            <Stack className="recipe-stack" gap={4}>
                {recipe}
            </Stack>
        </div>
    )
}
export default RecipeContainer;
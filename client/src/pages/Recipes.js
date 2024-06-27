import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import RecipeContainer from "../components/RecipeContainer"

function Recipes() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("/recipes")
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            } 
            throw Error("Network responce failed")
        })
        .then((recipesData) => setRecipes(recipesData))
    },[]);

    return(
        <div>
            <NavBar />
            <main>
                <br></br>
                <RecipeContainer  recps={recipes}/>
            </main>
        </div>
    );
}
export default Recipes;
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import RecipeTemplate from "../components/RecipeTemplate";

function CreateARecipe() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    return(
        <div className="create-recipe">
            <NavBar />
            <br></br>
            <main>
                <RecipeTemplate />
            </main>
        </div>
    )
}
export default CreateARecipe;
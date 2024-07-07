import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecipeForm from "../components/RecipeForm";

function CreateARecipe() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    return (
        <div>
            <div className="create-recipe">
                <NavBar />
                <br></br>
                <main>
                    <RecipeForm />
                </main>
            </div>
                <Footer />
        </div>
    )
}
export default CreateARecipe;
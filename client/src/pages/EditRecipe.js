import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import EditRecipeForm from "../components/EditRecipeForm";

function EditRecipe() {

    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    return(
        <div>
            <NavBar />
            <br></br>
            <main>
                <EditRecipeForm />
            </main>
        </div>
    );
}
export default EditRecipe;
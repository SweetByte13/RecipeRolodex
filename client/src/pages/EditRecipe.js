import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
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
            <Footer />
        </div>
    );
}
export default EditRecipe;
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";

function RecipeTemplate() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();
    
    return(
        <div className="recipe-template-container">
            <main>
                "TEMPLATE"
            </main>
        </div>
    );
}
export default RecipeTemplate;
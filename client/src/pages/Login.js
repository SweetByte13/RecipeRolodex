import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { AppContext } from "../context/Context";

function Login() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();

    return(
        <>
        <NavBar />
        <main>
            <h1 className="login-header">Welcome to RecipeRollodex</h1>
        </main>
        </>
    )
}
export default Login;
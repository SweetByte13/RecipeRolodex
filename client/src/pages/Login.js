import React, { useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { AppContext } from "../context/Context";
import Button from 'react-bootstrap/Button';
import LoginForm from "../components/LoginForm";

function Login() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();

    return(
        <>
        {/* <NavBar /> */}
        <main>
            <h1 className="login-header">Welcome to RecipeRollodex</h1>
            <h4 className="signup-loginpage">
                Don't have an account? &nbsp;
                <Button className="route-to-signup" onClick={() => navigate("/signup")}>
                    Sign Up
                </Button>
            </h4>
            {/* <LoginForm/> */}
        </main>
        </>
    )
}
export default Login;
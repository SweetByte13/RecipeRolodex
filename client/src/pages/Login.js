import React, { useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { AppContext } from "../context/Context";
import Button from 'react-bootstrap/Button';
import LoginForm from "../components/LoginForm";

function Login() {
    const navigate = useNavigate();

    return(
        <>
        <NavBar />
        <main>
            <h1 className="login-header">Welcome to RecipeRolodex</h1>
            <h3> Sign In</h3>
            <LoginForm/>
            <h4 className="signup-redirect-from-loginpage">
                Don't have an account? &nbsp;
                <Button className="route-to-signup" variant="success" onClick={() => navigate("/signup")}>
                    Sign Up
                </Button>
            </h4>
        </main>
        </>
    )
}
export default Login;
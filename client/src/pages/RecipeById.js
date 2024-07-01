import React, { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { HeartFill, Heart } from 'react-bootstrap-icons';
import NavBar from "../components/NavBar";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sourdough from '../images/Sourdough.jpg';
import RecipeCard from "../components/RecipeCard";

function RecipeById({ recipe }) {
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    const navigate = useNavigate();

    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <main>
                <Container>
                    <div>
                        {recipe === null || recipe === undefined ? "Loading..." : <RecipeCard key={recipe.id}/>}
                    </div>
                </Container>
            </main>
        </div>

    );
}
export default RecipeById
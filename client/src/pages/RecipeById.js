import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { HeartFill, Heart } from 'react-bootstrap-icons';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sourdough from '../images/Sourdough.jpg';

function RecipeById() {
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    const navigate = useNavigate();
    let { id } = useParams();

    const [recipe, setRecipe] = useState({
        title: "",
        instruction: "",
        category: "",
        recipe_ingredients: []
    })

    useEffect(() => {
        fetch(`/recipes/${id}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw Error('Network response was not ok.')
            })
            .then((recipeData) => {
                setRecipe(recipeData)
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            })
    }, [])

    const ingredient = recipe === null || recipe === undefined ? [] : recipe.recipe_ingredients.map((recipe_ingredient, index) => {
        return (
            <Container key={index}>
                <Row>
                    <Col>
                        {recipe_ingredient.ingredient.name}
                    </Col>
                    <Col xs={5}>
                        {recipe_ingredient.weight_of_ingr}
                    </Col>
                    <Col xs={5}>
                        {recipe_ingredient.weight_type}
                    </Col>
                </Row>
            </Container>
        )
    })

    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <main style={{ paddingTop: '10%'}}>
                <table style={{ width: "100%"}}>
                    <tbody>
                        <tr>
                            <td style={{ width: "50%", textAlign: "right" }}>
                                <Image className="recipe-image" src={recipe.image} style={{ height: 500 }} />
                            </td>
                            <td style={{ width: "50%" }}>
                                <h3 style={{ textAlign: "center" }}>
                                    {recipe.title}
                                </h3>
                                <br></br>
                                <h5 style={{ textAlign: "center" }}>
                                    {recipe.category}
                                </h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Container >
                    <br></br>
                    <Container className="header-container">
                        <Row>
                            <Col>
                                <u>Ingredients</u>
                            </Col>
                            <Col xs={5}>
                                <u>Amount</u>
                            </Col>
                            <Col xs={5}>
                                <u>Weight</u>
                            </Col>
                        </Row>
                    <div className="ingredients">
                        {ingredient}
                    </div>
                    <br></br>
                    </Container>
                    <div className="instructions">
                        <u>Instructions:</u>&nbsp;&nbsp;
                        {recipe.instruction}
                    </div>
                </Container>
            </main>
            <Footer />
        </div >

    );
}
export default RecipeById
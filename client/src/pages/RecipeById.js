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
            <main>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "50%", textAlign: "right" }}>
                                <Image className="recipe-image" src={recipe.image} style={{ height: 500 }} />
                            </td>
                            <td style={{ width: "50%" }}>
                                <h3 style={{ textAlign: "center" }}>
                                    {/* Sourdough Boule */}
                                    {recipe.title}
                                </h3>
                                <br></br>
                                <h5 style={{ textAlign: "center" }}>
                                    {/* Author? */}
                                    {recipe.category}
                                </h5>
                                <br></br>
                                {/* <h6 style={{ textAlign: "center" }}>
                                    Date of Recipe Creation?
                                </h6> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Container >
                    {/* <div style={{ textAlign: "center"}}>
                        <br></br>
                        <h5>
                            The Story Behind Sourdough Bread
                        </h5>
                        <p style={{ textAlign: "center"}}>

                            Sourdough bread has a rich history that dates back to ancient times.
                            It’s believed to have originated in Ancient Egypt around 1500 BC and was likely the first form of leavening available to bakers.
                            The process of making sourdough involves fermenting dough using naturally occurring lactobacilli and yeast.
                            The result is a bread with a slightly sour taste, hence the name “sourdough”.

                            In the 19th century, during the California Gold Rush, sourdough was the main bread made in Northern California and is still a part of the culture in San Francisco today.
                            The nickname “sourdough” is a term often associated with miners in these regions, as they were known to carry a pouch of starter with them to make their bread.

                            Today, sourdough bread is loved by many for its unique flavor and texture.
                            It’s also appreciated for its natural and traditional baking method, which contrasts with the commercial yeast products that are commonly used in bread production today.
                            Making sourdough bread is a labor of love, but the end result is always worth the effort.
                            Happy baking!
                        </p>
                    </div> */}
                    <div>
                        {ingredient}
                        {/* <br></br>
                        <h3>
                            Ingredients:
                        </h3>
                        - 1 cup sourdough starter
                        <br></br>
                        - 1.5 cups warm water
                        <br></br>
                        - 2 teaspoons salt
                        <br></br>
                        - 5 cups bread flour
                        <br></br> */}
                    </div>
                    <div>
                        {recipe.instruction}
                        {/* <h3>
                            Instructions:
                        </h3>
                        1. In a large bowl, combine the sourdough starter and warm water.
                        <br></br>
                        2. Add the salt and bread flour to the bowl and mix until a dough forms.
                        <br></br>
                        3. Knead the dough on a floured surface for about 10 minutes.
                        <br></br>
                        4. Place the dough in a greased bowl, cover, and let it rise for 12-15 hours.
                        <br></br>
                        5. Preheat your oven to 450°F (232°C). If you have a Dutch oven, place it in the oven as it preheats.
                        <br></br>
                        6. Shape the dough into a ball and place it in the preheated Dutch oven. If you don't have a Dutch oven, place the dough on a baking sheet.
                        <br></br>
                        7. Bake for 30 minutes with the lid on (or covered with aluminum foil), then remove the lid (or foil) and bake for another 10-15 minutes until the bread is golden brown.
                        <br></br>
                        8. Let the bread cool before slicing and serving. Enjoy! */}
                    </div>
                </Container>
            </main>
            <Footer />
        </div >

    );
}
export default RecipeById
import React from "react";
import RecipeCard from "../components/RecipeCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function RecipeContainer({ recps }) {
    const recipe = recps.map((recipe) => {
        return (
            <div key={recipe.idx}>
                <RecipeCard key={recipe.id} recipe={recipe} />
            </div>
        )
    })

    const recipe_rows = []
    for (let index = 0; index < recipe.length; index += 3) {
        recipe_rows.push(
            <Row className="recipe-rows" key={index}>

                <Col>
                    {recipe[index]}
                </Col>
                <Col>
                    {index + 1 < recipe.length ? recipe[index+1] : ""}
                </Col>
                <Col>
                    {index + 2 < recipe.length ? recipe[index+2] : ""}
                </Col>
            </Row>)
    }

    return (
        <Container>
            {recipe_rows}
        </Container>
    )
}
export default RecipeContainer;

//add OCR file upload area
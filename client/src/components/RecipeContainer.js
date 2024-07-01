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

    return (
        <Container>
            <Row className="recipe-rows">
                <Col>
                    {recipe}
                </Col>
                <Col>
                    {recipe}
                </Col>
                <Col>
                    {recipe}
                </Col>
            </Row>
        </Container>
    )
}
export default RecipeContainer;

//add OCR file upload area
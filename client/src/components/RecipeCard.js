import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    const navigate = useNavigate();

    console.log(recipe)

    const { title, instructions, image, category } = recipe

    function handleSeeMoreButton() {
        if (user === null || user === undefined) {
            alert("User must be logged in.")
            return;
        }
        navigate(`/recipes/${recipe.id}`)
    }

    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <Card className="recipe-card">
                        <Card.Img className="card-image" variant="top" src={image} alt="Image" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text className="recipe-instructions">{instructions}</Card.Text>
                            <Card.Text className="recipe-category">Category: {category}</Card.Text>
                            <Button className="see-more-button" variant="success" onClick={() => handleSeeMoreButton()}>See More...</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))
            }
        </Row >
    );
}
export default RecipeCard;
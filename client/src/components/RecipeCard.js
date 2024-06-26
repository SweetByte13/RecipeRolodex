import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();
    const navigate = useNavigate();

    const { title, instructions, image, category } = recipe
    
    function handleSeeMoreButton() {
        if( user === null || user === undefined){
          alert ("User must be logged in.")
          return ;
        }
        navigate(`/recipes/${recipe.id}`)
    }

    return (
        <Card className="recipe-card">
            <Card.Header className="card-header" as="h5">{recipe.title}</Card.Header>
            <div className="recipe-card-text">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="recipe-instructions">{instructions}</Card.Text>
                    <Card.Text className="recipe-category">Category: {category}</Card.Text>
                    <div className="buttons">
                        <Button className="see-more-button" variant="success" onClick={() => handleSeeMoreButton()}>See More...</Button>
                    </div>
                </Card.Body>
            </div>
            <div className="recipe-card-img">
                <img className="card-image" src={image} alt="Image" />
            </div>
        </Card>
    );
}
export default RecipeCard;
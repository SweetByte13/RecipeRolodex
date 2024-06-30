import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { HeartFill, Heart } from 'react-bootstrap-icons';
import Sourdough from '../images/Sourdough.jpg';

function RecipeCard({ recipe }) {
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    const navigate = useNavigate();

    const [liked, setLiked] = useState(false);

    const { title, instructions, image, category } = recipe

    function handleLikedClick() {
        setLiked(!liked);
    }

    function handleSeeMoreButton() {
        if (user === null || user === undefined) {
            alert("User must be logged in.")
            return;
        }
        navigate(`/recipes/${recipe.id}`)
    }

    return (
                <Card className="recipe-card" style={{ width: '22rem', marginBottom: '2.5rem'}}>
                    <Card.Img className="card-image" variant="top" src={Sourdough} alt="Image" style={{ height: '15rem', width: '21.9rem'}}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="recipe-instructions">{instructions}</Card.Text>
                        <Card.Text className="recipe-category">Category: {category}</Card.Text>
                        <Button className="see-more-button" variant="success" onClick={() => handleSeeMoreButton()}>See More...</Button>
                        <br></br>
                        {!liked ? (
                            <Heart style={{float: 'right'}} color="grey" onClick={handleLikedClick}></Heart>
                        ) : (
                            <HeartFill  style={{float: 'right'}} color="red" onClick={handleLikedClick}></HeartFill>
                        )}
                    </Card.Body>
                </Card>
    );
}
export default RecipeCard;
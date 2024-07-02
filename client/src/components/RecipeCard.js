import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { HeartFill, Heart, PencilFill } from 'react-bootstrap-icons';
import Sourdough from '../images/Sourdough.jpg';

function RecipeCard({ recipe }) {
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    const navigate = useNavigate();

    const { title, instructions, image, category, recipe_users } = recipe

    const [liked, setLiked] = useState(
        recipe_users.some(x => x.user_id === user?.id));

    function handleLikedClick() {
        setLiked(!liked);

        const values = {
            recipe_id: recipe.id,
            user_id: user.id
        }

        if (!liked) {

            fetch("/liked_recipe", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then((resp) => {

                    if (!resp.ok) {
                        throw new Error(resp.statusText);
                    }
                    else {
                        return resp.json()
                    }
                }).then(resp => {
                    values["id"] = resp.id
                    recipe_users.push(values)
                });
        }
        else {
            const recipe_user = recipe_users.find(x => x.user_id === user.id)
            recipe_users.splice(recipe_users.indexOf(recipe_user), 1)
            fetch(`/delete_liked_recipe/${recipe_user.id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then((resp) => {
                    if (!resp.ok) {
                        throw new Error(resp.statusText);
                    }
                });
        }
    }

    function handleSeeMoreButton() {
        if (user === null || user === undefined) {
            alert("User must be logged in.")
            navigate('/login')
            return;
        }
        navigate(`/recipes/${recipe.id}`)
    }

    function handleEditClick() {
        navigate(`/edit_recipe/${recipe.id}`)
    }

    const isCreator = recipe_users.some(x => x.user_id === user?.id && x.creator)

    return (
        <Card className="recipe-card" style={{ width: '22rem', marginBottom: '2.5rem' }}>
            <Card.Img className="card-image" variant="top" src={Sourdough} alt="Image" style={{ height: '15rem', width: '21.9rem' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="recipe-instructions">{instructions}</Card.Text>
                <Card.Text className="recipe-category">Category: {category}</Card.Text>
                <Button className="see-more-button" variant="success" onClick={() => handleSeeMoreButton()}>See More...</Button>
                <br></br>
                {user !== null && user !== undefined ?
                    (isCreator ?
                        <PencilFill style={{ float: 'right' }} variant="success" onClick={handleEditClick}></PencilFill>
                        :
                        (!liked ? (
                            <Heart style={{ float: 'right' }} color="grey" onClick={handleLikedClick}></Heart>
                        ) : (
                            <HeartFill style={{ float: 'right' }} color="red" onClick={handleLikedClick}></HeartFill>))
                    )
                    :
                    // <Button variant="primary" onClick={handleSeeMoreButton}>
                    //     Log in to like recipes
                    // </Button>
                    ""
                }
            </Card.Body>
        </Card>
    );
}
export default RecipeCard;
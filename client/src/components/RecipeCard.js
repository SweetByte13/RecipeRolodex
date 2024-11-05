import React, { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { HeartFill, Heart, PencilFill } from 'react-bootstrap-icons';

function RecipeCard({ recipe }) {
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    const navigate = useNavigate();

    const { title, instructions, image, category, recipe_users } = recipe;
    const [liked, setLiked] = useState(recipe_users.some(x => x.user_id === user?.id));
    const [inGroceryList, setInGroceryList] = useState(false);
    const isCreator = recipe_users.some(x => x.user_id === user?.id && x.creator);

    function handleLikedClick(event) {
        setLiked(!liked);
        const values = {
            recipe_id: recipe.id,
            user_id: user.id
        };

        if (!liked) {
            fetch("/api/liked_recipe", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then((resp) => {
                    if (!resp.ok) {
                        throw new Error(resp.statusText);
                    } else {
                        return resp.json();
                    }
                }).then(resp => {
                    values["id"] = resp.id;
                    recipe_users.push(values);
                });
        } else {
            const recipe_user = recipe_users.find(x => x.user_id === user.id);
            recipe_users.splice(recipe_users.indexOf(recipe_user), 1);

            fetch(`/api/delete_liked_recipe/${recipe_user.id}`, {
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
            alert("User must be logged in.");
            navigate('/login');
            return;
        }
        navigate(`/recipes/${recipe.id}`);
    }

    function handleEditClick() {
        navigate(`/edit_recipe/${recipe.id}`);
    }

    useEffect(() => {
        let groceryList = JSON.parse(localStorage.getItem("groceryList")) || [];
        setInGroceryList(groceryList.some((r) => r.id === recipe.id));
    }, [recipe.id]);

    function handleGroceryClick() {
        let groceryList = JSON.parse(localStorage.getItem("groceryList")) || [];
        if (!inGroceryList) {
            const recipeCard = {
                id: recipe.id,
                recipe_ingredients: recipe.recipe_ingredients
            };
            groceryList.push(recipeCard);
            localStorage.setItem("groceryList", JSON.stringify(groceryList));
        } else {
            let indexOfRecipe = groceryList.findIndex((r) => r.id === recipe.id);
            groceryList.splice(indexOfRecipe, 1);
            localStorage.setItem("groceryList", JSON.stringify(groceryList));
        }
        setInGroceryList(!inGroceryList);
    }

    return (
        <Card className="recipe-card mb-4" style={{ width: '100%', maxWidth: '22rem' }}>
            <Card.Img className="card-image" variant="top" src={image} alt="Image" style={{ height: '25rem', width: '100%', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="recipe-instructions">{instructions}</Card.Text>
                <Card.Text className="recipe-category">Category: {category}</Card.Text>
                <Button className="see-more-button" variant="success" onClick={() => handleSeeMoreButton()}>See More...</Button>
                {user !== null && user !== undefined ? (inGroceryList ? <Button className="grocery-button" variant="outline-danger" onClick={handleGroceryClick}>Remove from List</Button>
                    :
                    <Button className="grocery-button" variant="success" onClick={handleGroceryClick}>Add to Grocery List</Button>) : ""}
                <br></br>
                <div className="marginTop: 15px">
                    {user !== null && user !== undefined ?
                        (isCreator ?
                            <PencilFill style={{ float: 'right'}} variant="success" onClick={handleEditClick}></PencilFill>
                            :
                            (!liked ? (
                                <Heart style={{ float: 'right'}} color="grey" onClick={handleLikedClick}></Heart>
                            ) : (
                                <HeartFill style={{ float: 'right'}} color="red" onClick={handleLikedClick}></HeartFill>))
                        )
                        :
                        ""
                    }
                </div>
            </Card.Body>
        </Card>
    );
}
export default RecipeCard;
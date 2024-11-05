import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function GroceryList() {
    const [groceryItems, setGroceryItems] = useState([]);

    useEffect(() => {
        let groceryList = JSON.parse(localStorage.getItem("groceryList")) || [];
        setGroceryItems(groceryList);
        console.log(groceryList);
    }, []);

    const items = groceryItems.map((gi, giIndex) => (
        gi.recipe_ingredients.map((ri, riIndex) => (
            <ListGroup.Item key={`${giIndex}-${riIndex}`} className="grocery-list-item" style={{ backgroundColor: "rgb(245, 239, 165)" }}>
                {ri.ingredient?.name} : {ri.weight_of_ingr} {ri.weight_type}
            </ListGroup.Item>
        ))
    )).flat();

    return (
        <Container className="my-4">
            <ListGroup className="grocery-list-container">
                {items}
            </ListGroup>
        </Container>
    );
}

export default GroceryList;

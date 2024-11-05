import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecipeContainer from "../components/RecipeContainer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        console.log("fetch")
        fetch("/api/recipes")
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw Error("Network response failed");
            })
            .then((recipesData) => {
                setRecipes(recipesData);
                setFilteredRecipes(recipesData);
            });
    }, []);

    const filteredRecipes2 = filteredRecipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <NavBar />
            <main>
                <br />
                <Container className="search-filter">
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <SearchBar setSearchRecipe={setSearchTerm} />
                        </Col>
                        <Col xs={12} md={6}>
                            <CategoryFilter recipes={recipes} setRecipes={setRecipes} setFilteredRecipes={setFilteredRecipes} />
                        </Col>
                    </Row>
                </Container>
                <RecipeContainer recps={filteredRecipes2} />
            </main>
            <Footer />
        </div>
    );
}

export default Recipes;

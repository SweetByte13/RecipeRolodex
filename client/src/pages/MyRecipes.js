import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecipeContainer from "../components/RecipeContainer";
import SearchBar from "../components/SearchBar";
import RecipeFilter from "../components/RecipeFilter";
import Row from 'react-bootstrap/Row';

function MyRecipes() {
    let { id } = useParams();
    const [recipes, setRecipes] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredRecipes, setFilteredRecipes] = useState([])

    useEffect(() => {
        fetch(`/api/my_recipes/${id}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw Error("Network responce failed")
            })
            .then((recipesData) => {
                console.log(recipesData)
                setRecipes(recipesData)
                setFilteredRecipes(recipesData)
            })
    }, []);

    const filteredRecipes2 = filteredRecipes.filter((recipe) => {
        return (recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
    })

    return (
        <div>
            <NavBar />
            <main>
                <br></br>
                <div className="search-filter">
                    <Row style={{ marginLeft: '50px' }}>&nbsp;&nbsp;&nbsp;&nbsp;
                        <SearchBar setSearchRecipe={setSearchTerm} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <RecipeFilter id={id} recipes={recipes} setRecipes={setRecipes} setFilteredRecipes={setFilteredRecipes} />
                    </Row>
                </div>
                <RecipeContainer recps={filteredRecipes2} />
            </main>
            <Footer />
        </div>
    );
}

export default MyRecipes;

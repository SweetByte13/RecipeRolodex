import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import RecipeContainer from "../components/RecipeContainer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Row from 'react-bootstrap/Row';


function Recipes() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    const [recipes, setRecipes] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredRecipes, setFilteredRecipes] = useState([])

    useEffect(() => {
        fetch("/recipes")
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw Error("Network responce failed")
            })
            .then((recipesData) => {
                console.log(recipesData)
                setRecipes(recipesData)
                setFilteredRecipes(recipesData)})
    }, []);

    const filteredRecipes2= filteredRecipes.filter((recipe) => {
        return (recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
    })

    return (
        <div>
            <NavBar />
            <main>
                <br></br>
                <Row>
                    <SearchBar setSearchRecipe={setSearchTerm} />
                    <CategoryFilter recipes={recipes} setRecipes={setRecipes} setFilteredRecipes={setFilteredRecipes} />
                </Row>
                <RecipeContainer recps={filteredRecipes2} />
            </main>
        </div>
    );
}
export default Recipes;
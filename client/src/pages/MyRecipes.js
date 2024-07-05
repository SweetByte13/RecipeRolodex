import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecipeContainer from "../components/RecipeContainer";
import SearchBar from "../components/SearchBar";
import RecipeFilter from "../components/RecipeFilter";
import Row from 'react-bootstrap/Row';
import RecipeCard from "../components/RecipeCard";

function MyRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredRecipes, setFilteredRecipes] = useState([])

    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    let { id } = useParams();

    useEffect(() => {
        console.log(user)
        fetch(`/my_recipes/${id}`)
            .then((resp) => {
                if (resp.ok) {
                    console.log(resp)
                    return resp.json();
                }
                throw Error("Network response failed")
            })
            .then((recipesData) => {
                setRecipes(recipesData);
                setFilteredRecipes(recipesData)
            })
    }, [])

    const filteredRecipes2= filteredRecipes.filter((recipe) => {
        return (recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
    })

  
    // const likedRecipes = filteredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)

    return (
        <div>
            <NavBar />
            <main>
                <br></br>
                <div className="search-filter">
                <Row style={{marginLeft: '50px'}}>&nbsp;&nbsp;&nbsp;&nbsp;
                    <SearchBar setSearchRecipe={setSearchTerm} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <RecipeFilter recipes={recipes} setRecipes={setRecipes} setFilteredRecipes={setFilteredRecipes} />
                </Row>
                </div>
                <RecipeContainer recps={filteredRecipes2} />
            </main>
            <Footer />
        </div>
    )
}

export default MyRecipes;

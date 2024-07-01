import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import RecipeContainer from "../components/RecipeContainer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Row from 'react-bootstrap/Row';
import RecipeCard from "../components/RecipeCard";

function MyRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState("");

    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    
    useEffect(() => {
        console.log(user)
        if(user) {
           console.log(user)
            fetch(`/my_recipes/${user.id}`)
                .then((resp) => {
                    if (resp.ok) {
                        return resp.json();
                    }
                    throw Error("Network response failed")
                })
                .then((recipesData) => {
                    console.log(recipesData)
                    setRecipes(recipesData);
                })
            }
        },[])

        const filteredRecipes = recipes.filter((recipe) => {
            return (recipe.title.toLowerCase().includes(search.toLowerCase()))
        })
        // if (filter === "all") {
        //     return true;
        // } else if (filter === "liked") {
        //     return recipe.liked;
        // } else if (filter === "created") {
        //     return recipe.created;
        // }
    const likedRecipes = filteredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
    
    return (
        <div>
            <NavBar />
            <SearchBar setSearch={setSearch} /> 
            <main>
                <RecipeContainer recps={filteredRecipes} />
            </main>
        </div>
    )
}

export default MyRecipes;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import RecipeContainer from "../components/RecipeContainer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Row from 'react-bootstrap/Row';
import RecipeForm from "../components/RecipeForm";

function MyRecipes({ recps }) {
   
    return (
        <div>
            <NavBar />
            <main>

            </main>
        </div>
    )

}
export default MyRecipes;

//fetch request
//shows all recipe cards the user has liked or created
//dropdown filter: all, liked, created
//search bar
//edit button on created recipe cards
    //when clicked: takes to /recipes/:id/edit
    //have patch and delete methods
    //looks like recipeform with autofill previous values
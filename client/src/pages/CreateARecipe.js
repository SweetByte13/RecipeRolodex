import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecipeForm from "../components/RecipeForm";

function CreateARecipe() {

    return (
        <div>
            <div className="create-recipe">
                <NavBar />
                <br></br>
                <main>
                    <RecipeForm />
                </main>
            </div>
                <Footer />
        </div>
    )
}
export default CreateARecipe;
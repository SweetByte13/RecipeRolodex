import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditRecipeForm from "../components/EditRecipeForm";

function EditRecipe() {
    return(
        <div>
            <NavBar />
            <br></br>
            <main>
                <EditRecipeForm />
            </main>
            <Footer />
        </div>
    );
}
export default EditRecipe;
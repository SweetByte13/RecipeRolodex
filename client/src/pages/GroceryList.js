import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListedGroceries from "../components/ListedGroceries";

function GroceryList() {
    return (
        <div>
            <NavBar />
            <main className="grocery-container">
                <div className="grocery-header">
                    <u >
                        <strong>Grocery List: </strong>
                    </u>
                </div>
                <br></br>
                <p className="grocery-list">
                    <ListedGroceries />
                </p>
            </main>
            <Footer />
        </div>
    );
}
export default GroceryList;
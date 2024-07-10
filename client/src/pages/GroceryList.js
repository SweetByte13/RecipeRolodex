import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListedGroceries from "../components/ListedGroceries";

function GroceryList() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();

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
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GroceryList from "../components/GroceryList";

function GroceryCompiler() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();

    return (
        <div>
            <NavBar />
            <main>
                <div className="grocery-header">
                    <u >
                        <strong>Grocery List: </strong>
                    </u>
                </div>
                <br></br>
                <br></br>
                <p className="grocery-list">
                    <GroceryList />
                </p>
            </main>
            <Footer />
        </div>
    );
}
export default GroceryCompiler;
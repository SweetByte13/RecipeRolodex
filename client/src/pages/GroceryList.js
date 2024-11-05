import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListedGroceries from "../components/ListedGroceries";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function GroceryList() {
    return (
        <div>
            <NavBar />
            <main className="grocery-container">
                <Container>
                    <div className="grocery-header">
                        <u>
                            <strong>Grocery List:</strong>
                        </u>
                    </div>
                    <br />
                    <div className="grocery-list">
                        <ListedGroceries />
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default GroceryList;

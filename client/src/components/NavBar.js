import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../images/logo.jpeg";

function NavBar() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();

    function handleLoginClick() {
        navigate("/login")
    }

    function handleLogoutClick() {
        fetch("/api/logout",
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((resp) => {
                if (resp.ok) {
                    setUser(null);
                    navigate("/")
                }
            });
    }

    return (
        <Container>
            <Navbar className="navbar" expand="xxl" bg="light" fixed="top">
                <Container className="navBar">
                    <Navbar.Brand href="/" className="nav-brand"><img
                        src={logo}
                        width="60"
                        height="60"
                        alt="logo" />
                        RecipeRolodex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-bar">
                            <Nav.Link href="/" className="home">Home</Nav.Link>
                            <Nav.Link href="/recipes" className="recipe">Recipes</Nav.Link>
                            <Nav.Link href="/conversion_tables" className="conversions">Conversions</Nav.Link>
                            {user === null || user === undefined ? "" : <Nav.Link className="create" href="/create_a_recipe">Create A Recipe</Nav.Link>}
                            {user === null || user === undefined ? "" : <Nav.Link className="grocery" href="/grocery_list">Grocery List</Nav.Link>}
                            {user === null || user === undefined ? "" : <Nav.Link className="myrecipes" href={`/my_recipes/${user.id}`}>My Recipes</Nav.Link>}
                            {user === null || user === undefined ? "" : <Nav.Link className="profile" href="/profile">Profile</Nav.Link>}
                            {user === null || user === undefined ? <Nav.Link className="signup" href="/signup">Signup</Nav.Link> : ""}
                            {user === null || user === undefined ? <Button className="navbar-login-btn" variant="success" onClick={handleLoginClick}>Login</Button> : <Button className="navbar-login-btn" variant="success" onClick={handleLogoutClick}>Logout</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container>
    )
}
export default NavBar;
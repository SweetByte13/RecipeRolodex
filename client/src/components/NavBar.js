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
        fetch("/logout",
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
        <Navbar expand="lg" bg="light" fixed="top" className="navbar">
            <Container>
                <Navbar.Brand href="/" className="nav-brand"><img
                    src={logo}
                    width="60"
                    height="60"
                    alt="logo" />
                    RecipeRolodex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-bar">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/recipes">Recipes</Nav.Link>
                        <Nav.Link href="/conversion_tables">Conversions</Nav.Link>
                        {user === null || user === undefined ? "" : <Nav.Link className="nav-link" href="/create_a_recipe">Create A Recipe</Nav.Link>}
                        {user === null || user === undefined ? "" : <Nav.Link className="nav-link" href={`/my_recipes/${user.id}`}>My Recipes</Nav.Link>}
                        {user === null || user === undefined ? "" : <Nav.Link className="nav-link" href="/profile">Profile</Nav.Link>}
                        {user === null || user === undefined ? <Nav.Link className="nav-link" href="/signup">Signup</Nav.Link> : ""}
                        {user === null || user === undefined ? <Button className="navbar-login-btn" variant="success" onClick={handleLoginClick}>Login</Button> : <Button className="navbar-login-btn" variant="success" onClick={handleLogoutClick}>Logout</Button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
export default NavBar;
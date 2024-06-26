import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
        <Navbar bg="light" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Brand href="/">RecipeRolodex</Navbar.Brand>
                <Nav className="nav-bar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/recipes">Recipes</Nav.Link>
                    <Nav.Link href="/login">Converstion Table</Nav.Link>
                    {user === null || user === undefined ?  "" : <Nav.Link className="nav-link" href="/profile">Profile</Nav.Link>}
                    {user === null || user === undefined ? <Nav.Link className="nav-link" href="/signup">Signup</Nav.Link>: ""}
                    {user === null || user === undefined ? <Button className="navbar-login-btn" variant="success" onClick={handleLoginClick}>Login</Button>:<Button className="navbar-login-btn" variant="success" onClick={handleLogoutClick}>Logout</Button>}
                </Nav>
            </Container>
        </Navbar >
    )
}
export default NavBar;
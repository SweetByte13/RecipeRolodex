import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import { Formik } from 'formik';
import * as yup from 'yup'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function RecipeForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    const validationSchema = yup.object().shape({
        r_image: yup.string(),
        title: yup.string(),
        ingredient: yup.string(),
        instructions: yup.string(),
        category: yup.string()
    })

    const initialValues = {
        r_image: '',
        title: '',
        ingredient: '',
        instructions: '',
        category: ''
    }


    const handleFormSubmit = (values, { setSubmitting }) => {
        fetch(`/create_a_recipe`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }).then((resp) => {
            if (resp.ok) {
                return resp.json()
            } else {
                alert('Invalid credentials')
            }
        }).then((user) => {
            setUser(user);
            console.log(user);
            navigate("/recipes");
        });
        setSubmitting(false);
    }

    const handleRecipeDelete = (values) => {
        if (!window.confirm("Are you sure you want to delete your recipe?")) {
            return;
        }
        fetch(`/create_a_recipe`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }).then((resp) => {
            if (resp.ok) {
                alert('Your recipe has been deleted. We are so sorry to see it go!')
                setUser(null)
                navigate("/recipes")
            } else {
                alert('Invalid credentials')
            }
        });
    }

    return (
        <div className="recipe-template-container">
            <main>
                <h2> Create your own Recipes:</h2>
                <strong>You may keep your recipes private or share them with our other users!</strong>
                <br></br>
                <br></br>
                <Container className="recipe-form-container">
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <Form className="recipe-form">
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formTitle">
                                            <Form.Label>Recipe Title:</Form.Label>
                                            <Form.Control
                                                type='text'
                                                id='title'
                                                name='title'
                                                placeholder="Recipe title..."
                                                value={values.title}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </Form.Group>
                                    </Col>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formIngredient">
                                            <Form.Label>Ingredient:</Form.Label>
                                            <Form.Control
                                                type='text'
                                                id='ingredient'
                                                name='ingredient'
                                                placeholder="Ingredient..."
                                                value={values.ingredient}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <InputGroup className="mb-3">
                                        <Form.Control aria-label="Text input with dropdown button" />
                                        <DropdownButton
                                            variant="outline-secondary"
                                            title="Select"
                                            id="weight-selection"
                                            align="end"
                                        >
                                            <Dropdown.Item href="#">teaspoon</Dropdown.Item>
                                            <Dropdown.Item href="#">tablespoon</Dropdown.Item>
                                            <Dropdown.Item href="#">cup</Dropdown.Item>
                                            <Dropdown.Item href="#">cup</Dropdown.Item>
                                            <Dropdown.Item href="#">ounce</Dropdown.Item>
                                            <Dropdown.Item href="#">mililiter</Dropdown.Item>
                                            <Dropdown.Item href="#">fluid ounce</Dropdown.Item>
                                            <Dropdown.Item href="#">gram</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                </Row>
                                <br></br>
                                <div className="d-grid gap-2">
                                    <Button className='recipe-form-button' type='submit' variant="success" size="lg">
                                        Submit Recipe
                                    </Button>
                                    <Button className='recipe-form-delete-button' variant="outline-danger" size="lg" onClick={() => handleRecipeDelete()}>
                                        Delete Recipe
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </main>
        </div>
    );
}
export default RecipeForm;


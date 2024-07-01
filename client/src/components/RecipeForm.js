import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import { Formik, FieldArray } from 'formik';
import * as yup from 'yup'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function RecipeForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    const [inputFields, setInputFields] = useState([
        { ingredient: '', amount: '', measurement: '' }
    ])

    const [publicCheckbox, setPublicCheckBox] = useState(false)

    const validationSchema = yup.object().shape({
        r_image: yup.string(),
        title: yup.string(),
        instructions: yup.string(),
        category: yup.string()
    })

    const initialValues = {
        r_image: '',
        title: '',
        instructions: '',
        category: ''
    }

    let formFields = inputFields.map((input, index) => {
        return (
            <div key={index}>
                <Row>
                    <Col md={5}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type='text'
                                id='ingredient'
                                name='ingredient'
                                placeholder="Ingredient..."
                                value={input.ingredient}
                                onChange={event => handleFormChange(index, event)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Control
                            type='text'
                            id='amount'
                            name='amount'
                            placeholder="Amount..."
                            value={input.amount}
                            onChange={event => handleFormChange(index, event)}
                        />
                    </Col>
                    <Col md={3}>
                        <Form.Select onChange={event => handleFormChange(index, event)} value={input.measurement} name="measurement" aria-label="measurements">
                            <option>select a unit of measurement:</option>
                            <option value="tsp">teaspoon</option>
                            <option value="tbl">tablespoon</option>
                            <option value="cup">cup</option>
                            <option value="oz">ounce</option>
                            <option value="lb">pound</option>
                            <option value="ml">mililiter</option>
                            <option value="fl oz">fluid ounce</option>
                            <option value="g">gram</option>
                            <option value="kg">kilogram</option>
                            <option value="each">each</option>
                        </Form.Select>
                    </Col>
                        <Col  md={1}>
                            {inputFields.length > 1 && (
                                <Button data-index={index} className="minus-ingredient-button" variant="outline-danger" size="sm" onClick={handleRemoveFeildclick}>
                                    -
                                </Button>
                            )}
                        </Col>
                </Row>
            </div >)
    })
    function handleFormChange(index, event) {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    function handleCheckBoxChange(event) {
        setPublicCheckBox(event.target.checked)
    }

    function handleAddFieldsClick() {
        let newField = { ingredient: '', amount: '', measurement: '' }
        setInputFields([...inputFields, newField])
    }

    function handleRemoveFeildclick(event) {
        const index = event.target.dataset.index
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    function handleFormSubmit(values, { setSubmitting }) {
        values["ingredients"] = inputFields
        values["public_private"] = publicCheckbox
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
                alert('Failed to submit Recipe')
            }
        }).then((user) => {
            console.log(user);
            // navigate("/recipes");
        });
        setSubmitting(false);
    }

    // function handleRecipeDelete(values) {
    //     if (!window.confirm("Are you sure you want to delete your recipe?")) {
    //         return;
    //     }
    //     fetch(`/create_a_recipe`, {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": 'application/json'
    //         },
    //         body: JSON.stringify(values)
    //     }).then((resp) => {
    //         if (resp.ok) {
    //             alert('Your recipe has been deleted. We are so sorry to see it go!')
    //             setUser(null)
    //             navigate("/recipes")
    //         } else {
    //             alert('Invalid credentials')
    //         }
    //     });
    // }

    return (
        <div className="recipe-template-container" >
            <main>
                <h2 className="create-recipe-header"> Create your own Recipes:</h2>
                <div className="create-recipe-subheader"><strong >You may keep your recipes private or share them with our other users!</strong></div>
                <br></br>
                <br></br>
                <Container className="recipe-form-container" >
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ newField, values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                            <Form className="recipe-form" onSubmit={handleSubmit}>
                                <Row >
                                    <Form.Label className="fw-bold">Category:</Form.Label>
                                    <Form.Select name="category" aria-label="category" onChange={handleChange}>
                                        <option>Select a category:</option>
                                        <option value="appetizers">Appetizers</option>
                                        <option value="soups">Soups</option>
                                        <option value="salads">Salads</option>
                                        <option value="main dishes">Main Dishes</option>
                                        <option value="side dishes">Side Dishes</option>
                                        <option value="bread">Breads</option>
                                        <option value="desserts">Desserts</option>
                                        <option value="candies">Candies</option>
                                        <option value="snacks">Snacks</option>
                                        <option value="beverages">Beverages</option>
                                        <option value="condiments">Condiments</option>
                                    </Form.Select>
                                </Row>
                                <br></br>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">Recipe Title:</Form.Label>
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
                                        <Form.Label className="fw-bold">Ingredient:</Form.Label>
                                    </Col>
                                    <Col>
                                        <Button className="float-sm-end" variant="success" size="sm" onClick={handleAddFieldsClick}>
                                            Add ingredient
                                        </Button>
                                    </Col>
                                </Row>
                                <br></br>

                                <FieldArray
                                    name="ingredients"
                                    render={() => formFields} />
                                <br></br>
                                <textarea onChange={handleChange} className="instructions" name="instructions"></textarea>
                                <Form.Switch className="public_private_toggle">
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        name='public_check'
                                        label="Keep your recipe private"
                                        checked={values.public_check}
                                        onChange={handleCheckBoxChange}
                                    />
                                </Form.Switch>

                                <div className="d-grid gap-2">
                                    <Button className='recipe-form-button' type='submit' variant="success" size="lg" onSubmit={handleSubmit}>
                                        Submit Recipe
                                    </Button>
                                    {/* <Button className='recipe-form-delete-button' variant="outline-danger" size="lg" onClick={handleRecipeDelete}>
                                        Delete Recipe
                                    </Button> */}
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


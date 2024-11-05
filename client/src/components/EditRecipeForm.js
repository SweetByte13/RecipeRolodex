import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/Context";
import { Formik, FieldArray } from 'formik';
import * as yup from 'yup'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function EditRecipeForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();
    let { id } = useParams();

    const [publicCheckbox, setPublicCheckBox] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const [instructions, setInstructions] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [inputFields, setInputFields] = useState([
        { ingredient: '', amount: '', measurement: '' }
    ])
    const [recipe, setRecipe] = useState({
        title: title,
        instruction: instructions,
        category: category,
        image: "",
        public_private: publicCheckbox,
        recipe_ingredients: []
    })

    useEffect(() => {
        fetch(`/api/recipes/${id}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw Error('Network response was not ok.')
            })
            .then((recipeData) => {
                setRecipe(recipeData)
                setInstructions(recipeData.instruction)
                const ingredients = recipeData.recipe_ingredients.map((ri) => {
                    return {
                        ingredient: ri.ingredient.name,
                        amount: ri.weight_of_ingr,
                        measurement: ri.weight_type
                    }
                })
                setInputFields(ingredients)
            })
    }, [])

    const validationSchema = yup.object().shape({
        title: yup.string(),
        category: yup.string()
    })

    const initialValues = {
        image: recipe.image,
        title: recipe.title,
        instruction: instructions,
        category: recipe.category,
        public_private: recipe.public_private
    }

    let formFields = inputFields.map((input, index) => {
        return (
            <div key={index}>
                <Row className="mb-3">
                    <Col xs={12} md={5}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type='text'
                                id='ingredient'
                                name='ingredient'
                                placeholder="Ingredient..."
                                value={input.ingredient}
                                onChange={event => handleFormChange(index, event)}
                                className="w-100"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6} md={3}>
                        <Form.Control
                            type='text'
                            id='amount'
                            name='amount'
                            placeholder="Amount..."
                            value={input.amount}
                            onChange={event => handleFormChange(index, event)}
                            className="w-100"
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <Form.Select
                            onChange={event => handleFormChange(index, event)}
                            value={input.measurement}
                            name="measurement"
                            aria-label="measurements"
                            className="w-100"
                        >
                            <option>Select a unit of measurement:</option>
                            <option value="tsp">teaspoon</option>
                            <option value="tbl">tablespoon</option>
                            <option value="cup">cup</option>
                            <option value="oz">ounce</option>
                            <option value="lb">pound</option>
                            <option value="ml">milliliter</option>
                            <option value="fl oz">fluid ounce</option>
                            <option value="g">gram</option>
                            <option value="kg">kilogram</option>
                            <option value="each">each</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12} md={1} className="d-flex align-items-center">
                        {inputFields.length > 1 && (
                            <Button
                                data-index={index}
                                className="minus-ingredient-button"
                                variant="outline-danger"
                                size="sm"
                                onClick={handleRemoveFieldclick}
                            >
                                -
                            </Button>
                        )}
                    </Col>
                </Row>
            </div>
        );
    });


    function handleFormChange(index, event) {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    function handleCheckBoxChange(event) {
        console.log(event.target.checked)
        setPublicCheckBox(event.target.checked)
    }

    function handleAddFieldsClick() {
        let newField = { ingredient: '', amount: '', measurement: '' }
        setInputFields([...inputFields, newField])
    }

    function handleRemoveFieldclick(event) {
        const index = event.target.dataset.index
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    function handleTextareaChange(event) {
        setInstructions(event.target.value)
    }

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value)
    }
    const handleImageFileChange = event => {
        const image = event.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };
            reader.readAsDataURL(image);
        }
    }

    function handleFormSubmit(values, { setSubmitting }) {
        values["ingredients"] = inputFields
        values["public_private"] = publicCheckbox
        values["instructions"] = instructions;
        values["image"] = selectedFile
        console.log(values)
        fetch(`/api/recipes/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    alert('Failed to submit Recipe')
                }
            })
            .then((recipe) => {
                navigate(`/recipes/${id}`);
            });
        setSubmitting(false);
    }

    function handleRecipeDelete() {

        if (!window.confirm("Are you sure you want to delete your recipe?")) {
            return;
        }
        fetch(`/api/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            },
        }).then((resp) => {
            if (resp.ok) {
                alert('Your recipe has been deleted. We are so sorry to see it go!')
                navigate("/recipes")
            } else {
                alert('Invalid credentials')
            }
        });
    }

    return (
        <div className="recipe-template-container">
            <main>
                <h2 className="create-recipe-header">Create your own Recipes:</h2>
                <div className="create-recipe-subheader">
                    <strong>You may keep your recipes private or share them with our other users!</strong>
                </div>
                <br />
                <br />
                <Container className="recipe-form-container">
                    <Formik enableReinitialize initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
                        {({ values, handleBlur, handleSubmit }) => (
                            <Form className="recipe-form" onSubmit={handleSubmit}>
                                <Row>
                                    <Container>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Upload Image:</Form.Label>
                                            <Form.Control
                                                id="upload-image"
                                                name="upload-image"
                                                accept=".png, .jpeg, .jpg"
                                                type="file"
                                                onChange={handleImageFileChange}
                                                className="w-100"
                                            />
                                        </Form.Group>
                                    </Container>
                                </Row>
                                <Row className="my-3">
                                    <Col>
                                        <Form.Label className="fw-bold">Category:</Form.Label>
                                        <Form.Select
                                            name="category"
                                            aria-label="category"
                                            value={values.category}
                                            onChange={handleCategoryChange}
                                            className="w-100"
                                        >
                                            <option>Select a category:</option>
                                            <option value="Appetizers">Appetizers</option>
                                            <option value="Soups">Soups</option>
                                            <option value="Salads">Salads</option>
                                            <option value="Main Dishes">Main Dishes</option>
                                            <option value="Side Dishes">Side Dishes</option>
                                            <option value="Breads">Breads</option>
                                            <option value="Desserts">Desserts</option>
                                            <option value="Candies">Candies</option>
                                            <option value="Snacks">Snacks</option>
                                            <option value="Beverages">Beverages</option>
                                            <option value="Condiments">Condiments</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <br />
                                <Row className="my-3">
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Recipe Title:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="title"
                                                name="title"
                                                placeholder="Recipe title..."
                                                value={values.title}
                                                onChange={handleTitleChange}
                                                onBlur={handleBlur}
                                                className="w-100"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col>
                                        <Form.Label className="fw-bold">Ingredient:</Form.Label>
                                    </Col>
                                    <Col className="text-end">
                                        <Button className="float-sm-end" variant="success" size="sm" onClick={handleAddFieldsClick}>
                                            Add ingredient
                                        </Button>
                                    </Col>
                                </Row>
                                <br></br>
                                <FieldArray
                                    name="ingredients"
                                    render={() => formFields}
                                />
                                <br />
                                <textarea
                                    onChange={handleTextareaChange}
                                    value={values.instruction}
                                    className="instruction-area w-100"
                                    name="instructions"
                                    id="instruction-textarea"
                                />
                                <Form.Switch className="public_private_toggle">
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        name='public_private'
                                        label="Keep your recipe private"
                                        checked={values.public_private}
                                        onChange={handleCheckBoxChange}
                                    />
                                </Form.Switch>
                                <div className="d-grid gap-2">
                                    <Button className='recipe-form-button w-100' type='submit' variant="success" size="lg" onSubmit={handleSubmit}>
                                        Submit Recipe
                                    </Button>
                                    <Button className='recipe-form-delete-button w-100' variant="outline-danger" size="lg" onClick={handleRecipeDelete}>
                                        Delete Recipe
                                    </Button>
                                    <br />
                                    <br />
                                    <br />
                                </div>

                            </Form>
                        )}
                    </Formik>
                </Container>
            </main>
        </div>
    );
}

export default EditRecipeForm;
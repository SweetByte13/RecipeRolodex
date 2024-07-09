import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FieldArray } from 'formik';
import * as yup from 'yup'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function RecipeForm() {
    const navigate = useNavigate();

    const [publicCheckbox, setPublicCheckBox] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const [instructions, setInstructions] = useState("")
    const [inputFields, setInputFields] = useState([
        { ingredient: '', amount: '', measurement: '' }
    ])

    const validationSchema = yup.object().shape({
        image: yup.string(),
        title: yup.string(),
        instruction: yup.string(),
        category: yup.string()
    })

    const initialValues = {
        image: '',
        title: '',
        instruction: instructions,
        category: '',
        public_private: false
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
                    <Col md={1}>
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
    
    function handleTextareaChange(event) {
        setInstructions(event.target.value)
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

    const handleFileChange = event => {
        if (
            !window.confirm("This will overwrite the current instructions. Are you sure you wish to continue?")) {
            return
        }
        const reader = new FileReader();
        const file = event.target.files[0];
        if (file) {
            reader.readAsDataURL(file)
            reader.onload = readerEvent => {
                const fileText = readerEvent.target.result
                fetch('/get_image_ocr', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        fileName: file.name,
                        imageData: fileText.split(',')[1],
                    })
                }).then((resp) => {
                    if (resp.ok) {
                        return resp.json();
                    }
                    else {
                        alert('Invalid credentials')
                    }
                }).then((resp) => {
                    setInstructions(resp)
                })
            }
        }
        else {
            console.log('THIS FILE IS INVALID');
            const input = document.getElementsByTagName('input')[0];
            input.value = null;
        }

    }


    function handleFormSubmit(values, { setSubmitting }) {
        values["ingredients"] = inputFields;
        values["public_private"] = publicCheckbox;
        values["instructions"] = instructions;
        values["image"] = selectedFile
        fetch(`/create_a_recipe`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                alert('Failed to submit Recipe');
            }
        })
        .then((user) => {
            navigate("/recipes");
        });
        setSubmitting(false);
    }

    return (
        <div className="recipe-template-container" >
            <main>
                <h2 className="create-recipe-header">Create your own Recipes:</h2>
                <div className="create-recipe-subheader"><h5>You may keep your recipes private or share them with our other users!</h5></div>
                <br></br>
                <Container>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Choose an image to recieve text from and populate the instructions:
                            <br></br>
                            Please ensure the image is cropped and as clear as possible for the best results
                        </Form.Label>
                        <p></p>
                        <Form.Control
                            onChange={handleFileChange}
                            id="fileInput"
                            type="file"
                            name="file"
                            accept=".png, .jpeg, .jpg" />
                    </Form.Group>
                </Container>
                <Container className="recipe-form-container" >
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ values, handleChange, handleBlur, handleSubmit }) => (
                            <Form className="recipe-form" onSubmit={handleSubmit}>
                                <Row >
                                    <Container>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Upload Image:</Form.Label>
                                            <Form.Control
                                                id="upload-image"
                                                name="upload-image"
                                                accept=".png, .jpeg, .jpg"
                                                type="file"
                                                onChange={handleImageFileChange}
                                            />
                                        </Form.Group>
                                    </Container>
                                    <br></br>
                                    <Form.Label className="fw-bold">Category:</Form.Label>
                                    <Form.Select name="category" aria-label="category" onChange={handleChange}>
                                        <option>Select a category:</option>
                                        <option value="Appetizers">Appetizers</option>
                                        <option value="Soups">Soups</option>
                                        <option value="salads">Salads</option>
                                        <option value="Main Dishes">Main Dishes</option>
                                        <option value="Side Dishes">Side Dishes</option>
                                        <option value="Breads">Breads</option>
                                        <option value="Desserts">Desserts</option>
                                        <option value="Candies">Candies</option>
                                        <option value="Snacks">Snacks</option>
                                        <option value="Beverages">Beverages</option>
                                        <option value="Condiments">Condiments</option>
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
                                <textarea
                                    onChange={handleTextareaChange}
                                    value={values.instruction}
                                    className="instructions"
                                    name="instructions"
                                    id="instruction-textarea"></textarea>
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
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </main>
        </div >
    );
}
export default RecipeForm;


import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import { Formik } from 'formik';
import * as yup from 'yup'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ProfileForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();

    const validationSchema = yup.object().shape({
        // p_image: yup.string(),
        f_name: yup.string(),
        l_name: yup.string(),
        username: yup.string().min(5, "Username must be five characters or longer.").max(20, "Username can not be more than twenty characters."),
        email: yup.string().email("Invalid email address").min(8, "Must be a valid email address"),
        zipcode: yup.string()
    })

    const initialValues = {
        // p_image: user === null || user === undefined ? '' : user.p_image,
        f_name: user === null || user === undefined ? '' : user.f_name,
        l_name: user === null || user === undefined ? '' : user.l_name,
        username: user === null || user === undefined ? '' : user.username,
        email: user === null || user === undefined ? '' : user.email,
        zipcode: user === null || user === undefined ? '' : user.zipcode,
    }

    const handleFormSubmit = (values, { setSubmitting }) => {
        const endpoint = `/user/${user.id}`
        fetch(endpoint, {
            method: 'PATCH',
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
            navigate("/");
        });
        setSubmitting(false);
    }

    const handleAccountDelete = (values) => {
        if (!window.confirm("Are you sure you want to delete your account?")) {
            return;
        }
        const endpoint = `/user/${user.id}`
        fetch(endpoint, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }).then((resp) => {
            if (resp.ok) {
                alert('Your account has been deleted. We are so sorry to see you go!')
                setUser(null)
                navigate("/")
            } else {
                alert('Invalid credentials')
            }
        });
    }
    return (
        <Container className="profile-form-container">
            <Formik enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form className="profile-form" onSubmit={handleSubmit}>
                        {/* <Form.Group className="mb-3" controlId="formImage">
                            <Form.Label>Profile Picture:</Form.Label>
                            <Form.Control
                                type='text'
                                id='p_image'
                                name='p_image'
                                placeholder="Profile Picture..."
                                required value={values.p_image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">
                                {touched.p_image && errors.p_image}
                            </Form.Control.Feedback>
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="formFName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control
                                type='text'
                                id='f_name'
                                name='f_name'
                                placeholder="First Name..."
                                required 
                                value={values.f_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">
                                {touched.f_name && errors.f_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control
                                type='text'
                                id='l_name'
                                name='l_name'
                                placeholder="Last Name..."
                                required value={values.l_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">
                                {touched.l_name && errors.l_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type='text'
                                id='username'
                                name='username'
                                placeholder="Username..."
                                required value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your username must be at least 5 characters long, and must not contain spaces, special characters, or emoji.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type='text'
                                id='email'
                                name='email'
                                placeholder="Email..."
                                required value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formZipcode">
                            <Form.Label>Zipcode:</Form.Label>
                            <Form.Control
                                type='text'
                                id='zipcode'
                                name='zipcode'
                                placeholder="Zipcode..."
                                value={values.zipcode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Group>
                        <br></br>
                        <div className="d-grid gap-2">
                            <Button className='profile-form-button' type='submit' variant="success" size="lg">
                                Submit Changes
                            </Button>
                            <Button className='profile-form-delete-button' variant="outline-danger" size="lg" onClick={() => handleAccountDelete()}>
                                Delete Account
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
export default ProfileForm;
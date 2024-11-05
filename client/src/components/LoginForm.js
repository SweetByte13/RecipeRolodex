import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function LoginForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    let validationSchema = yup.object().shape({
        username: yup.string().required("Username is required").min(5, "Username is too short, must be at least five characters."),
        password: yup.string().required("Password is required").min(6, "Password is too short, must be longer than six characters.")
    });

    const initialValues = {
        username: '',
        password: ''
    };

    function handleLoginSubmit(values, { setSubmitting }) {
        fetch("/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                alert('Invalid credentials');
            }
        }).then((user) => {
            setUser(user);
            navigate("/");
        });
        setSubmitting(false);
    }

    return (
        <Container className="login-form-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLoginSubmit}
            >
                {({ handleSubmit, values, handleChange, errors, handleBlur }) => (
                    <Form className="login-form w-75 mx-auto" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 text-left w-75 mx-auto">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type='text'
                                id='username'
                                name='username'
                                placeholder="Username..."
                                required
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-100"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 text-left w-75 mx-auto">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type='password'
                                id='password'
                                name='password'
                                placeholder="Password..."
                                required
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-100"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button className="login-button w-50 mx-auto d-block" type='submit' variant="success">
                            Log In
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

export default LoginForm;

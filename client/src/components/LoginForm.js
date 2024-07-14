import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import * as yup from 'yup'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function LoginForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    let validationSchema = yup.object().shape({
        username: yup.string().required("USername is required").min(5, "Username is too short, must be at least five characters."),
        password: yup.string().required("Password is required").min(6, "Password is too short, must be longer than six characters.")
    })

    const initialValues = {
        username: '',
        password: ''
    }

    function handleLoginSubmit(values, { setSubmitting }) {
        fetch("/api/login", {
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
            navigate("/")
        })
        setSubmitting(false)
    }

    return (
        <Container className="login-form-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLoginSubmit}
            >
                {({ handleSubmit, values, handleChange, errors, handleBlur }) => (
                    <Form className="login-form" onSubmit={handleSubmit}>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type='text'
                            id='username'
                            name='username'
                            placeholder="Username..."
                            required values={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                        <br></br>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type='password'
                            id='password'
                            name='password'
                            placeholder="Password..."
                            required values={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                        <br></br>
                        <Button className="login-button" type='submit' variant="success">
                            Log In
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}
export default LoginForm;
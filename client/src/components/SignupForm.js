import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function SignupForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    const validationSchema = yup.object().shape({
        f_name: yup.string(),
        l_name: yup.string(),
        username: yup.string().min(5, "Username must be five characters or longer.").max(20, "Username can not be more than twenty characters."),
        email: yup.string().email("Invalid email address").min(8, "Must be a valid email address"),
        password: yup.string().min(6, "Password must be six characters or more.").max(20, "Passsword can not be longer than twenty characters."),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Password does not match"),
        zipcode: yup.string()
    });

    const initialValues = {
        f_name: '',
        l_name: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        zipcode: '',
    };

    function handleSignupFormSubmit(values, { setSubmitting }) {
        fetch("/api/signup", {
            method: 'POST',
            headers: {
                "content-Type": 'application/json'
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
        <Container className="signup-form-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSignupFormSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form className="signup-form" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 text-left">
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
                                className="w-100"
                            />
                            <Form.Control.Feedback type="invalid">
                                {touched.f_name && errors.f_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 text-left">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control
                                type='text'
                                id='l_name'
                                name='l_name'
                                placeholder="Last Name..."
                                required
                                value={values.l_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-100"
                            />
                            <Form.Control.Feedback type="invalid">
                                {touched.l_name && errors.l_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 text-left">
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
                            <Form.Text id="usernameHelpBlock" muted>
                                Your username must be at least 5 characters long, and must not contain spaces, special characters, or emoji.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 text-left">
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
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be at least 6 characters long, contain letters, numbers, and at least one special characters: !?$@#&^*,
                                and must not contain spaces, or emoji.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 text-left">
                            <Form.Label>Confirm Password:</Form.Label>
                            <Form.Control
                                type='password'
                                id='confirmPassword'
                                name='confirmPassword'
                                placeholder="Confirm Password..."
                                required
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-100"
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be at least 6 characters long, contain letters, numbers, and at least one special characters: !?$@#&^*,
                                and must not contain spaces, or emoji.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 text-left">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type='text'
                                id='email'
                                name='email'
                                placeholder="Email..."
                                required
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-100"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-left">
                            <Form.Label>Zipcode:</Form.Label>
                            <Form.Control
                                type='text'
                                id='zipcode'
                                name='zipcode'
                                placeholder="Zipcode..."
                                value={values.zipcode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-100"
                            />
                        </Form.Group>
                        <Button className='signup-form-button w-50 mx-auto d-block' type='submit' variant="success">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            <br />
            <div className="login-redirect-from-signup text-center">
                Already have an account? &nbsp;
                <Button className="route-to-login" variant="success" onClick={() => navigate("/login")}>
                    Log In
                </Button>
            </div>
        </Container>
    );
}

export default SignupForm;

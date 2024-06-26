import React, { useContext } from "react";
import { Formik } from 'formik';
import * as yup from 'yup'
import { Container } from '@mui/material';
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function LoginForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();

    let validationSchema = yup.object().shape({
        username: yup.string().required("USername is required").min(5, "Username is too short, must be at least five characters."),
        password: yup.string().required("Password is required").min(6, "Password is too short, must be longer than six characters.")
    })

    let initialValues = {
        username: '',
        password: ''
    }

    return (
      <Container className="login-form-container">
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
            >
            //     {({ handleSubmit, values, handleChange, errors, touched, handleBlur}) => (
                    <Form className="login-form">
            //             <Form.Label>Username:</Form.Label>
            //         </Form>
                )}

        </Formik>
      </Container>
    )
}
export default LoginForm;
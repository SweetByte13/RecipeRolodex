import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ProfileForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();

    const validationSchema = yup.object().shape({
        f_name: yup.string(),
        l_name: yup.string(),
        email: yup.string().email("Invalid email address").min(8, "Must be a valid email address"),
        zipcode: yup.string()
    });

    const initialValues = {
        f_name: user?.f_name || '',
        l_name: user?.l_name || '',
        email: user?.email || '',
        zipcode: user?.zipcode || '',
    };

    const handleFormSubmit = (values, { setSubmitting }) => {
        const endpoint = `/api/user/${user.id}`;
        fetch(endpoint, {
            method: 'PATCH',
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
    };

    const handleAccountDelete = () => {
        if (!window.confirm("Are you sure you want to delete your account?")) {
            return;
        }
        const endpoint = `/api/user/${user.id}`;
        fetch(endpoint, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((resp) => {
            if (resp.ok) {
                alert('Your account has been deleted. We are so sorry to see you go!');
                setUser(null);
                navigate("/");
            } else {
                alert('Invalid credentials');
            }
        });
    };

    return (
        <Container className="profile-form-container">
            <Formik enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form className="profile-form w-75 mx-auto" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
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
                        <Form.Group className="mb-3">
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
                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type='email'
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
                        <Form.Group className="mb-3">
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
                          <br></br>
                            <Button className='profile-form-button' type='submit' variant="success" size="lg" style={{marginBottom: '8px'}}>
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
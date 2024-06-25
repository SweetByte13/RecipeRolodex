import React, { useContext } from "react";
import { Formik } from 'formik';
import * as yup from 'yup'
import { Container } from '@mui/material';
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import {Button, Form} from "react-bootstrap";
// import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
// import Visibility from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import TextField  from "@material-ui/core/Input";

function SignupForm() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user, setUser } = useAppContext();
    // const [values, setValues] = React.useState({
    //     password: "",
    //     showPassword: false,
    // });

    const validationSchema = yup.object().shape({
        f_name: yup.string(),
        l_name: yup.string(),
        username: yup.string().min(5, "Username must be five characters or longer.").max(20, "Username can not be more than twenty characters."),
        email: yup.string().email("Invalid email address").min(8, "Must be a valid email address"),
        password: yup.string().min(6, "Password must be six characters or more.").max(20, "Passsword can not be longer than twenty characters."),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Password does not match"),
        zipcode: yup.number().integer()
    })

    let initialValues = {
        f_name: '',
        l_name: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        zipcode: '',
    }

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };
 
    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
 
    // const handlePasswordChange = (prop) => (event) => {
    //     setValues({
    //         ...values,
    //         [prop]: event.target.value,
    //     });
    // };

    function handleSignupFormSubmit(values, { setSubmitting }) {
        console.log("!!!!!!!!!!!!!")
        const endpoint = "/signup";
        fetch(endpoint, {
            method: 'POST',
            headers: {
                "content-Type": 'application/json'
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
        })
        setSubmitting(false);
    }

    return (
        <Container className="signup-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSignupFormSubmit}
            >
                {({ handleSubmit, values, handleChange, errors, touched, handleBlur }) => (
                    <Form className="signup-form" onSubmit={handleSubmit}>
                        <div className="left-column">
                            <label htmlFor='f_name'>First Name:</label>
                            <input
                                id='f_name'
                                name='f_name'
                                placeholder="First Name..."
                                required values={values.f_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // isinvalid={touched.f_name && !!errors.f_name}
                            />
                        </div>
                        <div className="right-column">
                            <label htmlFor='l_name'>Last Name:</label>
                            <input
                                id='l_name'
                                name='l_name'
                                placeholder="Last Name..."
                                required values={values.l_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // isinvalid={touched.l_name && !!errors.l_name}
                            />
                        </div>
                        <div className="left-column">
                            <label htmlFor='username'>Username:</label>
                            <input
                                id='username'
                                name='username'
                                placeholder="Username..."
                                required values={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // isinvalid={touched.username && !!errors.username}
                            />
                        </div>
                        <div className="right-column">
                            <label htmlFor='password'>Password:</label>
                            <input 
                            //   type={
                                //     values.showPassword
                                //         ? "text"
                                //         : "password"
                                // }
                                type='password'
                                id='password'
                                name='password'
                                placeholder="Password..."
                                required values={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // endAdornment={
                                //     <InputAdornment position="end">
                                //         <IconButton
                                //             onClick={
                                //                 handleClickShowPassword
                                //             }
                                //             onMouseDown={
                                //                 handleMouseDownPassword
                                //             }
                                //         >
                                //             {values.password ? (
                                //                 <Visibility />
                                //             ) : (
                                //                 <VisibilityOff />
                                //             )}
                                //         </IconButton>
                                //     </InputAdornment>
                                // }
                                // isinvalid={touched.password && !!errors.password}
                            />
                        </div>
                        <div className="left-column">
                            <label htmlFor='confirmPassword'>Confirm Password:</label>
                            <input
                                type='password'
                                id='confirmPassword'
                                name='confirmPassword'
                                placeholder="Confirm Password..."
                                required values={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // isinvalid={touched.confirmPassword && !!errors.confirmPassword}
                            />
                        </div>
                        <div className="right-column">
                            <label htmlFor='email'>Email:</label>
                            <input
                                id='email'
                                name='email'
                                placeholder="Email..."
                                required values={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // isinvalid={touched.email && !!errors.email}
                            />
                        </div>
                        <div className="left-column">
                            <label htmlFor='zipcode'>Zipcode:</label>
                            <input
                                id='zipcode'
                                name='zipcode'
                                placeholder="Zipcode..."
                                values={values.zipcode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // isinvalid={touched.zipcode && !!errors.zipcode}
                            />
                        </div>
                        <div>
                            <Button className='signup-form-button' type='submit'>Submit</Button>
                        </div>
                    </Form>
                )}
            </Formik>
            <br></br>
            <div className="login-redirect-from-signup">
                Already have an account? &nbsp;
                <Button className="route-to-login" onClick={() => navigate("/login")}>
                    Log In
                </Button>
            </div>
        </Container>
    )
}
export default SignupForm;
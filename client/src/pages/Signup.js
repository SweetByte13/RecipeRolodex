import React from "react";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignupForm";

function SignUp() {
    return (
        <div>
            <NavBar />
           <br></br>
            <main>
                <h1 className="signup-header">Welcome to RecipeRolodex!</h1>
                <h4 className="signup-title">Please use the form below to sign up!</h4>
                <SignUpForm />
            </main>
        </div>
    )
}

export default SignUp;
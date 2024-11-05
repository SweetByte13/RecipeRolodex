import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignupForm";

function SignUp() {
    return (
        <div>
            <NavBar />
           <br />
            <main>
                <h1 className="signup-header text-center">Welcome to RecipeRolodex!</h1>
                <h4 className="signup-title text-center">Please use the form below to sign up!</h4>
                <SignUpForm />
            </main>
            <Footer />
        </div>
    );
}

export default SignUp;

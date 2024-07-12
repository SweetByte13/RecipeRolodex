import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProfileForm from "../components/ProfileForm";

function Profile() {
    return (
        <>
            <NavBar />
            <main>
                <br></br>
            <h1 style={{marginTop: '50px'}}className="profile-title">Your RecipeRolodex Profile</h1>
            <h4 className="profile-sub-title">Maintain and update your profile below.</h4>
            <br></br>
                <ProfileForm />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </main>
            <Footer />
        </>
    );
}
export default Profile;
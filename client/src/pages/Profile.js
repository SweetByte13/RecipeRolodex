import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { AppContext } from "../context/Context";
import ProfileForm from "../components/ProfileForm";


function Profile() {
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    return (
        <>
            <NavBar />
            <main>
                <br></br>
            <h1 className="profile-title">Your RecipeRolodex Profile</h1>
            <h4 className="profile-sub-title">Maintain and update your profile below.</h4>
            <br></br>
                <ProfileForm />
            </main>
        </>
    );
}
export default Profile;
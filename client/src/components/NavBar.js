import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";

function NavBar() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const {user, setUser} = useAppContext();

return(
<div>
    NAVBAR
</div>
)
}
export default NavBar;
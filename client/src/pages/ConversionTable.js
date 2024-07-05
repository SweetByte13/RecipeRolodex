import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ConversionContainer from "../components/ConversionContainer";

function ConversionTable() {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { setUser } = useAppContext();

    return(
        <>
        <NavBar />
        <br></br>
            <main>
                <ConversionContainer />
            </main>
            <Footer />
        </>
    );
}
export default ConversionTable;
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ConversionContainer from "../components/ConversionContainer";

function ConversionTable() {

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
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "../context/Context";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Recipes from "../pages/Recipes";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/check_session")
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      }).then((user) => {
        console.log(user)
        setUser(user)
      });
  }, []);


  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/recipes" element={<Recipes />}/>
          </Routes>
        </>
      </AppContext.Provider>
    </>
  )
}

export default App;

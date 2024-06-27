import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "../context/Context";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Recipes from "../pages/Recipes";
import Profile from "../pages/Profile";
import ConversionTable from "../pages/ConversionTable";
import CreateARecipe from "../pages/CreateARecipe";

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
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/recipes" element={<Recipes />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/conversion_tables" element={<ConversionTable />}/>
            <Route path="/create_a_recipes" element={<CreateARecipe />}/>
            {/* <Route path="/conversion_tables#Top" element={<a name="Top"></a>}/> */}
          </Routes>
        </>
      </AppContext.Provider>
    </>
  )
}

export default App;

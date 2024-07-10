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
import MyRecipes from "../pages/MyRecipes";
import RecipeById from "../pages/RecipeById";
import EditRecipe from "../pages/EditRecipe";
import GroceryList from "../pages/GroceryList";

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
            <Route path="/recipes/:id" element={<RecipeById />}/>
            <Route path="/my_recipes/:id" element={<MyRecipes />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/conversion_tables" element={<ConversionTable />}/>
            <Route path="/create_a_recipe" element={<CreateARecipe />}/>
            <Route path="/edit_recipe/:id" element={<EditRecipe />} />
            <Route path="/grocery_list" element={<GroceryList />} />
          </Routes>
        </>
      </AppContext.Provider>
    </>
  )
}

export default App;

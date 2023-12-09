import React from "react";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import Create from "./pages/create/create";
import Recipe from "./pages/recipe/recipe";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./app.css"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<Create />} />
            <Route path="/recipe" element={<Recipe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import Create from "./pages/create/create";
import Recipe from "./pages/recipe/recipe";
import Navbar from "./components/navbar";

import "./app.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<Create />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

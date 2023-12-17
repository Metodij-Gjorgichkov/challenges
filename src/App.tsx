import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ThemeContextConstructor from "./context/ThemeContextConstructor";
import Wrapper from "./components/Wrapper/Wrapper";
import Create from "./components/Create/Create";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextConstructor>
        <Wrapper>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="create" element={<Create />} />
            </Routes>
          </div>
        </Wrapper>
      </ThemeContextConstructor>
    </BrowserRouter>
  );
}

export default App;

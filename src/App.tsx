import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ArtistItem from "./components/ArtistItem/ArtistItem";
import ArtistPage from "./components/ArtistPage/ArtistPage";
import AlbumPage from "./components/AlbumPage/AlbumPage";
import Error from "./components/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Wrapper">
          <Routes>
            <Route path="/" element={<ArtistItem />} />
            <Route path="artist/:id" element={<ArtistPage />} />
            <Route path="artist/:id/:albumId" element={<AlbumPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

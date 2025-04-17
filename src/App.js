// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import About from "./about";
import Home from "./home";
 // Import the Footer component
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

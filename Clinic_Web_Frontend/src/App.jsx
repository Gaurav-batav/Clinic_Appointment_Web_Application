import React, { useContext } from 'react';
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

import "./api.js"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";

export default function App () {

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    <Footer/>
    </div>
  );
}

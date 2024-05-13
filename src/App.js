import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/pages/Products';
import ContactMe from './components/pages/Contact-me';
import AboutMe from './components/pages/About-me';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<AboutMe/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact-me' element={<ContactMe />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;

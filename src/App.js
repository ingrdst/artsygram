import React from 'react';
import Api from './api/Api.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header.js';
import { Footer } from './Components/Footer.js';
import { Home } from './Components/Home.js';
import { Login } from './Components/Login/Login.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

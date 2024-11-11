import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123') {
      setIsAuthenticated(true);
    } else {
      alert('Digite seu nome ou senha corretamente');
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {isAuthenticated ? (
            <Route path="*" element={<div>Authenticated Route</div>} />
          ) : (
            <Route path="*" element={<Login onLogin={handleLogin} />} />
          )}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
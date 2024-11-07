import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AppRoute from './components/Route/AppRoute';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'; // Importe o componente Home

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectToPostForm, setRedirectToPostForm] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123') {
      setIsAuthenticated(true);
      setRedirectToPostForm(true); // Ativa o redirecionamento    
    } else {
      alert('Digite seu nome ou senha corretamente');
    }
  };

  return (    
    <BrowserRouter>
      <div className="App">        
        <Header /> 

        <Routes>
          {/* Rota para exibir Home primeiro */}
          <Route path="/" element={<Home />} />

          {/* Renderiza as rotas protegidas ou a página de login */}
          {isAuthenticated ? (
            <Route path="*" element={<AppRoute isAuthenticated={isAuthenticated} />} />
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

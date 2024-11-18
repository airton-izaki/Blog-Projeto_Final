import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoute from './components/Route/AppRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123') {
      setIsAuthenticated(true);
      return true;
    } else {
      alert('Digite seu nome ou senha corretamente');
      return false;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoute isAuthenticated={isAuthenticated} onLogin={handleLogin} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
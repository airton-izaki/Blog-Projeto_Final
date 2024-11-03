import React, { useState } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header';
import AppRoute from './components/Route/AppRoute';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';

const App = () =>
{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectToPostForm, setRedirectToPostForm] = useState(false);

  const handleLogin = (username, password) => {
    (username === 'admin' && password === '123') 
    ? 
    (
        setIsAuthenticated(true),
        setRedirectToPostForm(true) // Ativa o redirecionamento    
    )
     : alert('Digite seu nome ou senha corretamente');
};
  return(    
    <BrowserRouter>
      <div className="App">        
        <Header /> 

        {
          isAuthenticated ?
            <AppRoute isAuthenticated = {isAuthenticated} /> 
           :
           <Login onLogin = {handleLogin} />
          } 
             
        <Footer />
      </div>
    </BrowserRouter>    
  );
};
export default App;
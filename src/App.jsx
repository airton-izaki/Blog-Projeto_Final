import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header';
import AppRoute from './components/Route/AppRoute';
import Footer from './components/Footer/Footer';


const App = () =>
{
  return(
    
    <BrowserRouter>
      <div className="App">        
        <Header />        
        <AppRoute />        
        <Footer />
      </div>
    </BrowserRouter>    
  );
};
export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import FullPost from '../../components/FullPost/FullPost';

const AppRoute = () =>
const AppRoute = () =>
{
     return(
          <Routes>          
               <Route path = '/'         element = { <Home     /> } />
               <Route path = '/About'    element = { <About    /> } />
               <Route path = '/Contact'  element = { <Contact  /> } />                           
               <Route path = '/Login'    element = { <Login    /> } />  
               <Route path = '/post/:id' element = { <FullPost /> } />         
          </Routes>
     );

};
export default AppRoute;
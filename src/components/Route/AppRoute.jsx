import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NoFound/NotFound';
import FullPost from '../../components/FullPost/FullPost';
import PostForm from '../../pages/PostForm/PostForm';

const AppRoute = ({ isAuthenticated }) =>
{
     return(
          <Routes>          
               <Route path = '/'         element = { <Home     /> } />
               <Route path = '/About'    element = { <About    /> } />
               <Route path = '/Contact'  element = { <Contact  /> } />                           
               <Route path = '/Login'    element = { <Login    /> } />  
               <Route path = '/post/:id' element = { <FullPost /> } /> 

               {/* Rota para o PostForm, com verificação de autenticação */}                                
               <Route path="/postform"   element = 
               {
                    isAuthenticated 
                    ? 
                    <PostForm /> 
                    : 
                    <Navigate to="/login" />
               }  />
               <Route path = '*'         element = { <NotFound /> } />           
          </Routes>
     );

};
export default AppRoute;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NoFound/NotFound';
import FullPost from '../../components/FullPost/FullPost';
import PostForm from '../../pages/PostForm/PostForm';

const AppRoute = () =>
{
     return(
          <Routes>          
               <Route path = '/'         element = { <Home     /> } />
               <Route path = '/About'    element = { <About    /> } />
               <Route path = '/Contact'  element = { <Contact  /> } />                           
               <Route path = '/Login'    element = { <Login    /> } />  
               <Route path = '/post/:id' element = { <FullPost /> } /> 
               <Route path = '/postform' element = { <PostForm /> }  />               
               <Route path = '*'         element = { <NotFound /> } />           
          </Routes>
     );

};
export default AppRoute;
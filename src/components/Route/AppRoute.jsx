import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import FullPost from '../../components/FullPost/FullPost';
import PostForm from '../../pages/PostForm/PostForm';

// Componente para proteger rotas
const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

const AppRoute = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>          
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />                           
      <Route path="/login" element={<Login onLogin={onLogin} />} />  
      <Route path="/post/:id" element={<FullPost />} />
      <Route 
        path="/postform" 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <PostForm />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoute;
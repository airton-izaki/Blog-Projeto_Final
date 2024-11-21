import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import FullPost from '../../components/FullPost/FullPost';
import PostForm from '../../pages/PostForm/PostForm';
import Register from '../Register/Register';

// Componente para proteger rotas.Garantindo que apenas usuários autenticados possam acessá-las.
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
		<Route path="/post/:id" element={<FullPost />} />     {/* Define uma rota dinâmica para "/post/:id", onde :id é um parâmetro de URL */}
		<Route path="/register" element={<Register />} />
		
		{/* Define uma rota para "/postform", protegida pelo componente ProtectedRoute */}
		<Route 
		path="/postform" 
		element={          
			<ProtectedRoute isAuthenticated={isAuthenticated}>  {/* Se o usuário estiver autenticado, renderiza o componente PostForm */}
			<PostForm />
			</ProtectedRoute>
		} 
		/>
		<Route path="*" element={<Navigate to="/" />} />
	</Routes>
	);
};

export default AppRoute;
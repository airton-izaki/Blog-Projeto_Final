import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => 
  {
	e.preventDefault();
	if (onLogin(username, password)) 
	{
		navigate('/postform'); // Navega para a página "PostForm" após autenticação
	}
  };

  

return (
	<div className="login-container">
		<div className="form-container">
		<h2 className="login-title">Login</h2>
		
		<form onSubmit={handleSubmit} className="login-form">
			<div className="form-group">
				<label className="form-label">
					Usuário
				</label>
				<input
					type="text"			
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="login-form-input"
					required
				/>
			</div>

			<div className="form-group">
				<label className="form-label">
					Senha
				</label>
				<input
					type="password"			
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="login-form-input"
					required
				/>
			</div>

			<button
				type="submit"
				className="login-button"
			>
			Entrar
			</button>
		</form>
		<p className="signup-prompt">
          	Não tem uma conta?{' '}
          <Link to="/register" className="signup-link">
            Cadastre-se aqui
          </Link>
        </p>
		</div>
	</div>
);
};

export default Login;
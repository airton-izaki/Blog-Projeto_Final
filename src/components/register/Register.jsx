import React from 'react';
import './Register.css';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
  };

  return (
<div className="register-container">
	<h2>Cadastro</h2>
	<form onSubmit={handleRegister} className="register-form">
		<div className="register-form-group">
			<label>Usuário</label>
			<input type="text" id="username" required />
		</div>
		<div className="register-form-group">
			<label>Senha</label>
			<input type="password" id="password" required />
		</div>
	<button className='register-button' type="submit">Cadastrar</button>
	</form>
</div>
  );
};

export default Register;
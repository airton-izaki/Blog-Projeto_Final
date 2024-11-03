import React, { useState } from 'react';
import './Login.css';

const Login = ( {onLogin} ) =>
{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) =>
    {
          e.preventDefault();
           // Verifica se os campos estão preenchidos
          (userName || password) 
          ?
          setError('Nome de usuário ou senha incorretos')
          : 
          setError('');
          const success = onLogin(userName, password);
          if (!success) 
          {
               setError('Nome de usuário ou senha incorretos.');
          }
    } 

     return(
          <div className="login-container">
               <h2>Faça seu login</h2>
               <form onSubmit = { handleSubmit }>                    
                    <div className='form-input'>
                         <input
                              type="text"
                              value = {userName}
                              placeholder = 'Nome'
                              onChange = { (e) => setUserName(e.target.value) }
                              required
                         />                              
                    </div>
                    <div className='form-input'>
                         <input
                              type="password"
                              value = {password}
                              placeholder = 'Senha'
                              onChange = { (e) => setPassword(e.target.value) }
                              required
                         />
                    </div>
                    {/*..Exibe uma mensagem de erro, caso exista*/}
                    {error && <p className="error-message">{error}</p>}
                    <p className='form-register'>Caso não seja cadastrado, faça seu registro <a href="#">aqui</a></p>
                    <button className='form-button' type = 'submit' >Entrar</button>
               </form>           
        </div>
      );
};
export default Login;
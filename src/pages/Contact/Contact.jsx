import React, { useState } from 'react';
import './Contact.css';
import Facebook from '../../assets/Facebook.png';
import X from '../../assets/X.png';
import Instagram from '../../assets/Instagram.png';

const Contact = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [subject, setSubject] = useState('');
     const [isSubmitted, setIsSubmitted] = useState(false);

     //..mpede o comportamento padrão do formulário, que seria recarregar a página ao ser enviado.
     const handleSubmit = (e) => {
          e.preventDefault();
          setIsSubmitted(true);  // Significa que a mensagem foi enviada com sucesso
     };

     return (
          <div className="contact">
               <form className='contact-form' onSubmit={handleSubmit}>

                    <div className="teste">
                         <div>
                              <label>Nome </label>
                              <br />
                              <input 
                                   className='custom-input' 
                                   type="text" 
                                   value={name} 
                                   onChange={(e) => setName(e.target.value)} 
                                   required 
                              />
                         </div>
                         <div className="espaco">
                              <label className="label-class">Contato</label>
                              <p>hi@blog.com</p>
                         </div>
                    </div>

                    <br />
                    <div className="teste">
                         <div>
                              <label>E-mail</label>
                              <br />
                              <input 
                                   className='custom-input' 
                                   type="email" value={email} 
                                   onChange={(e) => setEmail(e.target.value)} 
                                   required 
                              />
                         </div>
                         <div className="espaco">
                              <label className="label-class">Situado em</label>
                              <p>Brasília, <br /> Brasil</p>
                         </div>
                    </div>

                    
                    <div className="teste">
                         <div>
                              <label>Mensagem</label>
                              <br />
                              <input className='custom-input' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                         </div>
                         <div className="footer-social">
                              {/* Links separados para cada rede social */}
                              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                   <img src={Facebook} alt="Facebook" />
                              </a>
                              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                   <img src={X} alt="Twitter" />
                              </a>
                              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                   <img src={Instagram} alt="Instagram" />
                              </a>
                         </div>
                    </div>

                    <br />
                    <div className="teste">
                         <button type='submit'>Entre em contato</button>

                         {/* Se 'isSubmitted' for 'true', o que estiver após o && será executado */}
                         {isSubmitted && <p className="success-message">Mensagem enviada com sucesso!</p>}
                    </div>

               </form>
          </div>
     );
};

export default Contact;

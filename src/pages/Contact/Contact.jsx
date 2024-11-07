import React, { useState } from 'react';
import './Contact.css';

const Contact = () =>
{
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [subject, setSubject] = useState('');
     const [message, setMessage] = useState('');
     const [isSubmitted, setIsSubmitted] = useState(false)       //..Guarda o estado de envio 

     const handleSubmit = (e) =>
     {
          e.preventDefault(); 
          setIsSubmitted(true);        //..Significa que a mesnagem foi enviada com sucesso
     }


     return(
          <div className="contact">
          <h1>Página de contatos</h1>
          <form className='contact-form' action="">
               <div className = 'form-group'>
                    <label htmlFor="">Nome:</label>
                    <input
                         type="text"
                         value = {name}
                         onChange={ (e) => setName(e.target.value)}
                         required />
               </div>
               <div className = 'form-group'>
                    <label htmlFor="">E-mail:</label>
                    <input
                         type="email"
                         value = {email}
                         onChange={ (e) => setEmail(e.target.value)}
                         required />
               </div>
               <div className = 'form-group'>
                    <label htmlFor="">Assunto:</label>
                    <input
                         type="text"
                         value = {subject}
                         onChange={ (e) => setSubject(e.target.value)}
                         required />
               </div>
               <div className = 'form-group'>
                    <label htmlFor="">Mensagem:</label>
                   <textarea
                         name = 'message'
                         value = {message}
                         onChange = { (e) => setMessage(e.target.value)}
                         required
                    ></textarea>
               </div>
               <button type = 'Submit' onSubmit={handleSubmit} >Enviar</button>

               {/*..Se 'isSubmitted' for 'true', o que estiver após o && será executado */}
               {isSubmitted && <p className="success-message">Mensagem enviada com sucesso!</p>}

          </form>
     </div>
     );
};
export default Contact;
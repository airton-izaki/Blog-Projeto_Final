import React from 'react';
import './Footer';

const Footer = () =>
{
     return(          
          <footer className="footer">
               <div className="footer-content">
                    <div className="footer-links">
                         <a href="/">Home</a>
                         <a href="/noticias">Notícias</a>
                         <a href="/tabela">Tabela</a>
                         <a href="/sobre">Sobre Nós</a>
                         <a href="/contato">Contato</a>
                    </div>
                    <div className="footer-social">
                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                <p>&copy; 2024 Blog de Futebol. Todos os direitos reservados.</p>
               </div>
          </footer>
         
     );
};
export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Facebook from '../../assets/Facebook.png'
import X from '../../assets/X.png'
import Instagram from '../../assets/Instagram.png'

const Footer = () =>
{
     return(          
          <footer className = "footer">
               <p>&copy; 2024 Blog de Futebol. Todos os direitos reservados.</p>
               <div className = "footer-content">
                    <div className = "footer-links">
                         <nav className='footer-nav'>
                              <ul className='footer-ul'>
                                   <li><Link  to = "/"  >Home</Link></li>
                                   <li><Link  to = "/noticias"  >Notícias</Link></li>
                                   <li><Link  to = "/tabela"  >Tabela</Link></li>
                                   <li><Link  to = "/about"  >Sobre nós</Link></li>
                                   <li><Link  to = "/contact"  >Contato</Link></li>
                              </ul>
                         </nav>                         
                    </div>
                    <div className='div'>
                         <p>Telefone: +55(61)99875-7815</p>
                         <p>E-mail: futebol_blog@gmail.com</p>
                         <p>End: Rua Fulano de tal, nº 1000</p>
                         <p>cidade, Estado</p>
                    </div>
                    <div className="footer-social">
                         <nav>
                              <ul>
                                   <li>
                                        <a href = "https://facebook.com" target="_blank" >
                                             <img src = {Facebook} alt="Facebook" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href = "https://twitter.com" target="_blank" >
                                        <img src = {X} alt="x" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href = "https://instagram.com" target="_blank" >
                                        <img src = {Instagram} alt="Instagram" />
                                        </a>
                                   </li>
                              </ul>
                         </nav>                       
                    </div>                
               </div>
               
          </footer>
         
     );
};
export default Footer;
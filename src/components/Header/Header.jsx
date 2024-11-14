import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logo.png'

const Header = () =>
{
     return(
          <div>
               <header className='header'>
                   
                    <nav className = 'nav'>
                         <ul className='nav-ul'>
                              <li><Link to = '/'           >Home        </Link></li>
                              <li><Link to = '/about'      >Sobre nós   </Link></li>
                              <li><Link to = '/contact'    >Contato     </Link></li>
                              <li><Link to = '/postform'   >Postar      </Link></li>                         
                              <li><Link to = '/login'      >Entrar      </Link></li>                                               
                         </ul>
                    </nav>
               </header>
          </div>
     );
};
export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
     return (
          <div>
               <header className='header'>
                    <nav>
                         <ul className='nav-ul'>
                              <li><Link to='/login'      >Entrar      </Link></li>
                              <li><Link to='/'           >Home        </Link></li>
                              <li><Link to='/about'      >Sobre nós   </Link></li>
                              <li><Link to='/Contact'    >Contato     </Link></li>
                              <li><Link to='/postform'   >Postar      </Link></li>
                         </ul>
                    </nav>
               </header>
          </div>
     );
};
export default Header;
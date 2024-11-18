import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
     return (
          <div>
               <header className='header'>
                    <nav>
                         <ul className='nav-ul'>
                              <li><Link to='/'           >Home        </Link></li>
                              <li><Link to='/about'      >About       </Link></li>
                              <li><Link to='/Contact'    >Contact     </Link></li>
                              <li><Link to='/postform'   >Post        </Link></li>
                              <li><Link to='/login'      >Sign in/up  </Link></li>
                         </ul>
                    </nav>
               </header>
          </div>
     );
};
export default Header;
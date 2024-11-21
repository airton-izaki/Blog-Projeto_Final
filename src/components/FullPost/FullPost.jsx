import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FullPost.css';

const FullPost = () =>
{
     const location = useLocation();
     const navigate = useNavigate();
     const post = location.state ? location.state.post : null;

     const handleBack = ()=>
     {
          navigate('/'); //..Redireciona para a página principal
     }
     

     return(
          <div className="fullpost-container">
               {
                    post ? 
                    (
                         <div className="post-details">
                              <h2>{post.title}</h2>
                              <p>{post.content}</p>
                              <button className='button' onClick = {handleBack}>Voltar para página principal</button>
                         </div>
                    )
                    :
                    (
                         <h2>Posto não encontrado</h2>
                    )
               }
          </div>
     );
};
export default FullPost;
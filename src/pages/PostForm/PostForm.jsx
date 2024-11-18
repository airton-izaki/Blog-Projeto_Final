import React, { useState } from "react";
import './PostForm.css';

const PostForm = ({ onPostSubmit }) => {
     const [title, setTitle] = useState('');
     const [author, setAuthor] = useState('');
     const [summary, setSummary] = useState('');
     const [content, setContent] = useState('');
     const [error, setError] = useState('');

     const handleSubmit = (e) => {
          e.preventDefault();

          // Verifica se todos os campos estão preenchidos
          if (!title || !author || !summary || !content) {
               setError('Preencha todos os campos');
               return;
          }
          else {
               setError('')
          }

          // Chama a função `onPostSubmit` com os dados do post
          onPostSubmit({ title, author, summary, content });

          // Limpa os campos após o envio
          setTitle('');
          setAuthor('');
          setSummary('');
          setContent('');
          setError('');
     };

     return (
          <div className="AlignPost">

               <div className="postform-container">
                    <h2>Cadastrar Post</h2>
                    <form onSubmit={handleSubmit}>
                         <div className="postform-itens">
                              <label className="post-label" htmlFor="">Titulo</label>
                              <input
                                   type="text"
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                                   required
                              />
                         </div>
                         <div className="postform-itens">
                              <label className="post-label" htmlFor="">Autor</label>
                              <input
                                   type="text"
                                   value={author}
                                   onChange={(e) => setAuthor(e.target.value)}
                                   required
                              />
                         </div>
                         <div className="postform-itens">
                              <label className="post-label" htmlFor="">Resumo</label>
                              <textarea className="textarea-summary" name="content"></textarea>
                         </div>
                         <div>
                              <label className="post-label" htmlFor="">Conteúdo</label>
                              <textarea className="textarea-content" name="content"></textarea>
                         </div>
                         {error && <p className="error-message">{error}</p>}
                         <button className="post-button" type="submit">Postar</button>
                    </form>
               </div>

          </div>

     );
};
export default PostForm;
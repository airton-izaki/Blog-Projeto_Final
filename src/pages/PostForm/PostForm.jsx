﻿import React, { useState } from "react";
import './PostForm.css';

const PostForm = ( {onPostSubmit} ) =>
{
     const [title, setTitle] = useState('');
     const [author, setAuthor] = useState('');
     const [date, setDate] = useState('');
     const [summary, setSummary] = useState('');
     const [content, setContent] = useState('');
     const [error, setError] = useState('');

     const handleSubmit = (e) =>
     {
          e.preventDefault();

          // Verifica se todos os campos estão preenchidos
          if ( !title || !author || !summary || !content )
          {
               setError('Preencha todos os campos');
               return;
          }
          else 
          {
               setError('')
          }
          
          // Chama a função `onPostSubmit` com os dados do post
          onPostSubmit({ title, author, summary, content });

          // Limpa os campos após o envio
          setTitle('');
          setAuthor('');
          setDate('');
          setSummary('');
          setContent('');
          setError('');
     };

     return(
          <div className="postform-container">
          <h2>Cadastrar Post</h2>     
          <form onSubmit={handleSubmit} className="postform">
              <div className="postform-columns">
                  <div className="postform-identification">
                      <div className="postform-item">
                          <label htmlFor="title">Título</label>
                          <input
                              type="text"
                              id="title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                          />
                      </div>
                      <div className="postform-item">
                          <label htmlFor="author">Autor</label>
                          <input
                              type="text"
                              id="author"
                              value={author}
                              onChange={(e) => setAuthor(e.target.value)}
                              required
                          />
                      </div>
                      <div className="postform-item">
                          <label htmlFor="date">Data de Publicação</label>
                          <input
                              type="date"
                              id="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              required
                          />
                      </div>
                      <div className="postform-item">
                          <label htmlFor="summary">Resumo</label>
                          <textarea
                              id="summary"
                              className="textarea-summary"
                              value={summary}
                              onChange={(e) => setSummary(e.target.value)}
                          ></textarea>
                      </div>
                  </div>
      
                  <div className="postform-content">
                      <label htmlFor="content">Conteúdo</label>
                      <textarea
                          id="content"
                          className="textarea-content"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                      ></textarea>
                  </div>
              </div>
      
              {error && <p className="error-message">{error}</p>}
              <button className="post-button" type="submit">Postar</button>
          </form>
      </div>
     );
};
export default PostForm;
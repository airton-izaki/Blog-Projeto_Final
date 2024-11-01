import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () =>
{
     
//....Criando um Objeto "posts" que conterá a lista com todos os posts publicados no blog
const posts = 
[
     {
          id: 1,
          author: 'Artur Antunes Coimbra',
          title: 'Post 1',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus ea nihil sapiente quod, excepturi hic exercitationem deserunt, aperiam quaerat iste explicabo animi iure qui repellendus provident maxime eos deleniti.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },

     {
          id: 2,
          title: 'Post 2',
          author: 'Edson Arantes do Nascimento',
          summary: 'Loremaperiam quaerat iste explicabo animi iure qui repellendus provident maxime  Expedita, possimus ea nihil sapiente quod, excepturi hic exercitationem deserunt, aperiam quaerat iste explicabo animi iure qui repellendus provident maxime eos deleniti.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },

     {
          id: 3,
          title: 'Post 3',
          author: 'Maria da Silva',
          summary: ' amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure error doloribus maiores cum animi reiciendis fugiat velit?',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },
     
     {
          id: 4,
          title: 'Post 4',
          author: 'Ana da Silva',
          summary: ' amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure ipsum, dolor sit amet consectetur adipisicing elit. Vel cum eveniet magnam in! Iure atque repellendus ad, accusamus accusantium eligendi sint fugit expedita quo, ut ab magnam adipisci neque repellat?',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },

     {
          id: 5,
          title: 'Post 5',
          author: 'Carlos Alberto Torres',
          summary: ' amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure error doloribus maiores cum animi reiciendis fugiat velit?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequatur deleniti tempore, veniam, beatae eius fugit fugiat voluptates inventore, consectetur recusandae voluptatem. Blanditiis.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },

     {
          id: 6,
          title: 'Post 6',
          author: 'Marco Antonio da Silva',
          summary: ' amet consectetur adipisicing elit. Ex assumenda eligendi eos ea cum animi reiciendis fugiat velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eius. Eveniet voluptatem, commodi molestias aspernatur ut maxime cumque quidem officia qui, reiciendis accusantium consequuntur ex quae itaque magnam voluptas mollitia.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },

     {
          id: 7,
          title: 'Post 7',
          author: 'Rita de Cassia',
          summary: ' Amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure error doloribus maiores cum animi reiciendis fugiat velit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio veritatis dolore animi id omnis sapiente nemo itaque, voluptate facere provident numquam accusamus facilis eos.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },

     {
          id: 8,
          title: 'Post 8',
          author: 'Gustavo Henrique',
          summary: 'Lorem ipsum dolor, sit amet consectetur amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure error doloribus maiores cum animi reiciendis fugiat velit?. Sed excepturi iure incidunt velit ab necessitatibus molestias ea nostrum reiciendis ipsa tempore blanditiis. Earum saepe doloremque culpa odio.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },

     {
          id: 9,
          title: 'Post 9',
          author: 'Romario Faria',
          summary: 'Lorem ipsum dolor, sit amet consectetur amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure error doloribus maiores cum animi reiciendis fugiat.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },

     {
          id: 10,
          title: 'Post 10',
          author: 'Ronaldo Nazário',
          summary: 'Lorem ipsum dolor, mpedit voluptate repellendus quo iure error doloribus maiores cum animi reiciendis fugiat velit?. Sed excepturi iure incidunt velit ab necessitatibus molestias ea nostrum reiciendis ipsa tempore blanditiis. Earum saepe doloremque culpa odio.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.'
     },
];


     return(
          <div className="home">
               <h1>Bem-vindo ao mundo do futebol, o esporte mais popular do mundo.</h1>              
               
               <h2>Posts recentes</h2>
               {
                    posts.map
                    (
                         post => 
                         (
                              <div key={post.id} className="post-item">
                                   <h3>{post.title}</h3>
                                   <p>De: {post.author}</p>
                                   <p>{post.summary}</p>
                                   <Link to={`/post/${post.id}`} state={{ post }}>Leia mais</Link>
                              </div>
                         )
                    )
               }
               
          </div>
     );
};
export default Home;
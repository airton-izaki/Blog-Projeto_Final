import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Futebol_01 from '../../assets/Futebol_01.jpg';
import Futebol_02 from '../../assets/Futebol_02.jpg';

const Home = () => {

     //....Criando um Objeto "posts" que conterá a lista com todos os posts publicados no blog
     const posts =
          [
               {
                    id: 1,
                    author: 'Artur Antunes Coimbra',
                    title: 'Post 1',
                    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus ea nihil sapiente quod, excepturi hic exercitationem deserunt, aperiam quaerat iste explicabo animi iure qui repellendus provident maxime eos deleniti. Expedita, possimus ea nihil sapiente quod, excepturi hic exercitationem deserunt, aperiam quaerat iste explicabo animi iure qui repellendus provident maxime eos deleniti. Expedita, possimus ea nihil sapiente quod, excepturi hic exercitationem deserunt, aperiam quaerat iste explicabo animi iure qui repellendus provident maxime eos deleniti.',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.',
                    image: Futebol_01
               },

               {
                    id: 2,
                    title: 'Post 2',
                    author: 'Edson Arantes do Nascimento',
                    summary: 'Loremaperiam quaerat iste explicabo animi iure qui repellendus provident maxime  Expedita, possimus ea nihil sapiente quod, excepturi hic exercitationem deserunt, aperiam quaerat iste explicabo animi iure qui repellendus provident maxime eos deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus, accusamus itaque magni eligendi error amet, maxime molestias incidunt omnis aperiam aliquam quidem dicta culpa et placeat perspiciatis? Aspernatur, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus, accusamus itaque magni eligendi error amet, maxime molestias incidunt omnis aperiam aliquam quidem dicta culpa et placeat perspiciatis? Aspernatur, delectus.',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.',
                    image: Futebol_02
               },

               {
                    id: 3,
                    title: 'Post 3',
                    author: 'Maria da Silva',
                    summary: ' amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure error doloribus maiores cum animi reiciendis fugiat velit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nisi deleniti amet fuga quae voluptates soluta mollitia aut sequi consectetur reprehenderit consequatur necessitatibus atque temporibus porro dolore, culpa a nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nisi deleniti amet fuga quae voluptates soluta mollitia aut sequi consectetur reprehenderit consequatur necessitatibus atque temporibus porro dolore, culpa a nesciunt.',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.',
                    image: Futebol_02
               },

               {
                    id: 4,
                    title: 'Post 4',
                    author: 'Ana da Silva',
                    summary: ' Amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure ipsum, dolor sit amet consectetur adipisicing elit. Vel cum eveniet magnam in! Iure atque repellendus ad, accusamus accusantium eligendi sint fugit expedita quo, ut ab magnam adipisci neque repellat. Amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure ipsum, dolor sit amet consectetur adipisicing elit. Vel cum eveniet magnam in! Iure atque repellendus ad, accusamus accusantium eligendi sint fugit expedita quo, ut ab magnam adipisci neque repellat.',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.',
                    image: Futebol_02
               },

               {
                    id: 5,
                    title: 'Post 5',
                    author: 'Carlos Alberto Torres',
                    summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae deleniti ullam alias praesentium facilis maiores, cupiditate eligendi repellendus, dolores distinctio, ex inventore accusantium harum quas quod nam fugiat iste. Enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae deleniti ullam alias praesentium facilis maiores, cupiditate eligendi repellendus, dolores distinctio, ex inventore accusantium harum quas quod nam fugiat iste. Enim. Amet consectetur adipisicing elit. Ex assumenda eligendi eos ea modi repellendus quo iure error doloribus maiores cum animi reiciendis voluptatem harum labore, impedit voluptate repellendus quo iure error doloribus maiores cum animi reiciendis fugiat velit?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequatur deleniti tempore, veniam, beatae eius fugit fugiat voluptates inventore, consectetur recusandae voluptatem. Blanditiis.',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos debitis voluptatum neque aliquid delectus excepturi ipsam minima nulla maiores maxime fugiat dolores nostrum natus necessitatibus, est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis explicabo quisquam aliquam magni, veniam accusamus eos consectetur. Dolor ducimus corporis esse quam laudantium nulla tempora doloribus sed, provident molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores tenetur error vitae inventore nobis accusantium voluptatum ex corrupti impedit itaque dolor accusamus velit distinctio labore ipsum nostrum doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis fugit recusandae deserunt, explicabo nulla. Corrupti soluta doloremque nostrum sint. Magni distinctio ut deserunt veritatis maxime facilis sed repellat provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, vitae. Ad velit rem cumque accusantium odit, corporis ab sapiente voluptates sunt, laboriosam recusandae minima nemo est eos eligendi? Facilis, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam sequi necessitatibus vero iste! Eaque quisquam voluptatum odit sed ducimus aspernatur impedit, corporis reiciendis asperiores, laboriosam architecto commodi at tempore.',
                    image: Futebol_02
               },

               
          ];


     return (
          <div className="home">
               {
                    posts.map
                         (
                              post =>
                              (
                                   <div key={post.id} className="post-item">
                                        <img className='post-image' src={post.image} />
                                        <div className="post-content">
                                             <h3>{post.title}</h3>
                                             <p>De: {post.author}</p>
                                             <p>{post.summary}</p>
                                             <Link to={`/post/${post.id}`} state={{ post }}>Leia mais</Link>
                                        </div>
                                   </div>
                              )
                         )
               }

          </div>
     );
};
export default Home;
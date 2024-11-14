import React from 'react';
import Joao_Silva from '../../assets/Joao_Silva.jpg';
import Maria_Oliveira from '../../assets/Maria_Oliveira.jpg';
import Pedro_Santos from '../../assets/Pedro_Santos.jpg';
import './About.css';

const About = () =>
{
     return(
          <div>
          <section>
               <div className="about-text">
                    <h2>Bem-vindo ao nosso blog de Futebol!</h2>
                    <br />
                    <p>
                         Este blog foi criado para todos os apaixonados por futebol.
                Aqui, você encontrará notícias, análises, curiosidades, e tudo o que envolve o emocionante mundo do futebol.
                Seja você um fã de futebol local ou internacional, temos conteúdo para todos os gostos!
                    </p>
               </div>

               <div className="team">
                    <h2>A Equipe</h2>
                    <p> Nossa equipe é formada por jornalistas esportivos, ex-jogadores e aficionados
           por futebol que trazem uma variedade de perspectivas e conhecimentos para o blog.</p>
               </div>
         <br />
               <div className="about-team">

                    <div className="teste">
                         <div className="teste">
                              <div className="team-members">

                                   <img className='team-image' src={Joao_Silva} alt="Joao_Silva" />

                                   <h3>João Silva</h3>
                                   <p> Jornalista esportivo com mais de 10 anos de experiência cobrindo
                     grandes campeonatos de futebol pelo mundo. </p>

                              </div>
                         </div>

                         <div className="teste" >
                              <div className="team-members">

                                   <img className='team-image' src={Maria_Oliveira} alt="Maria_Oliveira" />

                                   <h3>Maria Oliveira</h3>
                                   <p> Ex-jogadora profissional e analista tática, Maria oferece uma visão única sobre as estratégias e dinâmicas dos jogos. </p>

                              </div>
                         </div>

                         <div className="teste" >
                              <div className="team-members">

                                   <img className='team-image' src={Pedro_Santos} alt="Pedro_Santos" />

                                   <h3>Pedro Santos</h3>
                                   <p> Um verdadeiro fanático por futebol, Pedro compartilha sua paixão e conhecimento em artigos cheios de entusiasmo e paixão.</p>

                              </div>
                         </div>
                    </div>

               </div>
               <div className="about-final">
                    <h3>Missão:</h3>
                    <br />
                    <p>Nossa missão é informar e entreter nossos leitores com notícias de última hora, análises detalhadas, e conteúdos exclusivos sobre o futebol. Acreditamos que o futebol é mais do que um esporte – é uma paixão que une as pessoas em todo o mundo.
                    </p>
                    <br />
                    <h3>Visão:</h3>
                    <br />
                    <p>Nosso objetivo é criar uma comunidade ativa de fãs de futebol onde todos podem compartilhar suas ideias, discutir as partidas, e se manter atualizados sobre os principais eventos do futebol mundial.</p>
                    <br />
                    <h3>Valor:</h3>
                    <br />
                    <p>O valor deste blog reside na qualidade das informações que compartilhamos com nossos leitores.
                         Acreditamos que o futebol vai além de um esporte, é uma paixão que une pessoas de diferentes culturas e origens. A nossa missão é manter essa chama acesa, oferecendo conteúdo gratuito, relevante e acessível a todos.
                    </p>
               </div>

          </section>
     </div>
     );
};
export default About;
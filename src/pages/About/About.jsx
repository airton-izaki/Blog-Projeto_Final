﻿import React from 'react';
import Joao_Silva from '../../assets/Joao_Silva.jpg';
import Maria_Oliveira from '../../assets/Maria_Oliveira.jpg';
import Pedro_Santos from '../../assets/Pedro_Santos.jpg';
import './About.css';

const About = () =>
{
     return(
          <div className='about-page'>
               <h2>Bem-vindo ao nosso blog de Futebol!</h2>
               <section className="about-content">
                    <div className="about-text">
                         <h2>Conheça um pouco de nós</h2>
                         <p>
                         Este blog foi criado para todos os apaixonados por futebol. Aqui, você encontrará notícias, análises, curiosidades, e tudo o que envolve o emocionante mundo do futebol. Seja você um fã de futebol local ou internacional, temos conteúdo
                         para todos os gostos!
                         </p>
                    </div>
                    <div className="about-team">
                         <h2>A Equipe</h2>
                         <p> Nossa equipe é formada por jornalistas esportivos, ex-jogadores e aficionados por futebol que trazem uma variedade de perspectivas e conhecimentos para o blog.</p>
                         
                         <h3>João Silva</h3>
                         <div className = 'team-members'>                   
                              <img className = 'team-image' src = {Joao_Silva} alt = "Joao_Silva" />
                              <p> Jornalista esportivo com mais de 10 anos de experiência cobrindo grandes campeonatos de futebol pelo mundo. </p>
                         </div>

                         <h3>Maria Oliveira</h3>
                         <div className="team-members">
                              <img className = 'team-image' src = {Maria_Oliveira} alt = "Maria_Oliveira" />
                              <p> Ex-jogadora profissional e analista tática, Maria oferece uma visão única sobre as estratégias e dinâmicas dos jogos. </p>
                         </div>

                         <h3>Pedro Santos</h3>
                         <div className="team-members">
                              <img className = 'team-image' src = {Pedro_Santos} alt = "Pedro_Santos" />
                              <p> Um verdadeiro fanático por futebol, Pedro compartilha sua paixão e conhecimento em artigos cheios de entusiasmo e paixão.</p>
                         </div>
                    </div>
                    <div className='about-mission'>
                         <h3>Missão</h3>
                         <p>Nossa missão é informar e entreter nossos leitores com notícias de última hora, análises detalhadas, e conteúdos exclusivos sobre o futebol. Acreditamos que o futebol é mais do que um esporte – é uma paixão que une as pessoas em todo o mundo.
                         </p>

                         <h3>Visão</h3>
                         <p>Nosso objetivo é criar uma comunidade ativa de fãs de futebol onde todos podem compartilhar suas ideias, discutir as partidas, e se manter atualizados sobre os principais eventos do futebol mundial.</p>

                         <h3>Valor</h3>
                         <p>O valor deste blog reside na qualidade das informações que compartilhamos com nossos leitores. 
                         Acreditamos que o futebol vai além de um esporte, é uma paixão que une pessoas de diferentes culturas e origens. A nossa missão é manter essa chama acesa, oferecendo conteúdo gratuito, relevante e acessível a todos.
                         </p>
                    </div>
                    
               </section>
          </div>
     );
};
export default About;
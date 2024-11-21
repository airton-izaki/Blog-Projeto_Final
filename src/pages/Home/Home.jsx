import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Futebol_01 from '../../assets/Futebol_01.jpg';
import Futebol_02 from '../../assets/Futebol_02.jpg';
import Futebol_03 from '../../assets/Futebol_03.jpg';
import Futebol_04 from '../../assets/Futebol_04.jpg';
import Futebol_05 from '../../assets/Futebol_05.jpg';

const Home = () => {

     //....Criando um Objeto "posts" que conterá a lista com todos os posts publicados no blog
     const posts =
          [
               {
                    id: 1,
                    author: 'Renato Maurício Prado',
                    title: 'Estrela de Filipe Luís segue brilhando no Fla. E o Botafogo que abra o olho.',
                    date: '20/11/2024',
                    summary: 'Esfacelado por contusões e desfalques causados pela Data Fifa, o Flamengo pisou o gramado da Arena Pantanal ainda com alguns de seus titulares e reservas abatidos por uma virose. Mesmo assim, marca registrada de Filipe Luís, não abdicou do ataque e criou boas chances para marcar, transformando o goleiro Walter do Cuiabá no melhor do jogo',                    
                    content: 'Esfacelado por contusões e desfalques causados pela Data Fifa, o Flamengo pisou o gramado da Arena Pantanal ainda com alguns de seus titulares e reservas abatidos por uma virose. Mesmo assim, marca registrada de Filipe Luís, não abdicou do ataque e criou boas chances para marcar, transformando o goleiro Walter do Cuiabá no melhor do jogo.Venceu, de virada, por 2 a 1, gols dos garotos que o treinador colocou no segundo tempo: Guilherme e Matheus Gonçalves. Nas duas jogadas, prevaleceu o estilo guerreiro exigido por Filipe. Bruno Henrique, no primeiro lance, pela direita, batalhou pela bola até recuperá-la, foi à linha de fundo e cruzou na medida para o jovem armador empatar. Michael, já nos acréscimos, fez o mesmo pela esquerda e seu cruzamento encontrou Matheus Gonçalves livre para empurrar pra rede e garantir os três pontos. Foi uma grande exibição? Não. Nem poderia com uma equipe tão brutalmente desfalcada. Mas, para os rubro-negros, como é bom ver que, independentemente da escalação, o sistema ofensivo, o jogo vertical, a luta incessante pela bola e a disposição física nos 90 minutos continuam em prática. Que diferença para seus antecessores posicionais! Na próxima rodada, contra o Fortaleza, no Castelão, o Flamengo terá de volta Léo Ortiz, Gerson, Plata e Varella. Nas atuais condições já serão reforços consideráveis. Mas o que a torcida rubro-negra espera, torcendo as mãos de ansiedade, é a temporada de 2025, quando todos os contundidos poderão estar de volta. Com Filipe Luís podendo usar Arrascaeta, Pedro, De La Cruz, Luís Araújo, Cebolinha e Viña, o otimismo é justificado. O jovem treinador foi sua maior conquista nos dois últimos anos. A Copa do Brasil foi brinde. O Palmeiras venceu o Bahia, sem jogar bem ou merecer. O Botafogo empatou com o Atlético Mineiro, enfrentando um adversário com um a menos, na maior parte da contenda. A onda parece ter virado a favor do time de Abel Ferreira. O de Artur Jorge que abra o olho. Pode acabar a temporada chupando o dedo.',
                    image: Futebol_01
               },

               {
                    id: 2,
                    title: 'Leila Pereira foi ver o Palmeiras ser campeão; e ai dela se não fosse',
                    author: 'Milly Lacombe',
                    date: '18/11/2024',
                    summary: 'O Palmeiras das mulheres é campeã estadual. A conquista foi nos pênaltis e sobre o arquirrival Corinthians. Uma taça erguida com muita justiça por um time que tem melhorado demais nos últimos anos. Gosto da ideia de que somos sempre tão grandes quanto nossos maiores rivais. Não haveria Palmeiras sem Corinthians, e vice-versa',
                    
                    content: 'O Palmeiras das mulheres é campeã estadual. A conquista foi nos pênaltis e sobre o arquirrival Corinthians. Uma taça erguida com muita justiça por um time que tem melhorado demais nos últimos anos. Gosto da ideia de que somos sempre tão grandes quanto nossos maiores rivais. Não haveria Palmeiras sem Corinthians, e vice-versa. O jogo foi disputado em Campinas, no Brinco de Ouro, quase sem público - e isso precisamos lamentar. Como o Corinthians masculino jogou mais cedo em São Paulo a orientação da PM foi para que as duas partidas do Corinthians não ocorressem na mesma cidade, ainda mais porque sendo uma das partidas contra um grande rival os riscos de violência, segundo a Polícia. Podemos debater a análise de risco, mas esse seria um outro texto. O que acho que vale elaborar aqui é o interesse da federação paulista, da confederação brasileira, do Palmeiras e do Corinthians pelo futebol feminino. Era o segundo jogo de uma final que merecia ser disputada na casa palmeirense com estádio lotado. Um mínimo de vontade política faria todos os envolvidos acharem uma solução, nem que ela fosse a mudança do jogo masculino do Corinthians, que não era uma final, ou até mesmo a mudança da data do feminino. Mas não. Ninguém quis pensar nisso. E as mulheres se mandaram para Campinas jogando em estádio com pouca gente, num horário estranho e afastado de uma casa que deveria ser sua também e não apenas dos homens. De frente para as câmeras da TV, víamos as arquibancadas do Brinco de Ouro da Princesa vazias. A imagem é forte e fica marcada. Quem liga a TV pensa: ninguém gosta mesmo desse esporte aí. Ninguém se importa se Augusto Melo, o mandatário corintiano, vai aos jogos das mulheres (raramente vai). Ninguém se importa se Mario Bittencourt vai ver as atletas do Fluminense em campo, se Landim vai ver as rubro-negras (não vai), se os mecenas do Galo vão ver o time feminino (não vão). O que importa é vigiar os passos de Leila Pereira em relação a tudo o que tem a ver com mulheres e o futebol.',
                    image: Futebol_02
               },

               {
                    id: 3,
                    title: 'O título que o Bota levará se perder o Brasileiro e a Libertadores.',
                    author: 'Milton Neves',
                    date: '15/11/2024',
                    summary: 'É inacreditável o que acontece com o Botafogo. De verdade, eu já não acreditava na possibilidade de uma nova refugada do Glorioso, que hoje é um time muito melhor que o do ano passado. Mas é impressionante o quanto que o grupo alvinegro começa a tremer quando das retas finais de campeonatos',
                    
                    content: 'É inacreditável o que acontece com o Botafogo. De verdade, eu já não acreditava na possibilidade de uma nova refugada do Glorioso, que hoje é um time muito melhor que o do ano passado. Mas é impressionante o quanto que o grupo alvinegro começa a tremer quando das retas finais de campeonatos. E o pior é que, com o mental abaladíssimo, o time de General Severiano corre também ENORME risco de perder feio para o Atlético-MG lá no Monumental de Núñez. E, sejamos francos: se acontecer de o Bota perder as duas taças, pelo menos um outro "título" o clube de John Textor merecerá. O de time mais pipoqueiro do mundo! Afinal de contas, já existiu na história do futebol do planeta tantas refugadas seguidas como as do Fogão?',
                    image: Futebol_03
               },

               {
                    id: 4,
                    title: 'Dia Competência Verde.',
                    author: 'Juca Kfouri',
                    date: '24/11/2024',
                    summary: ' Hoje é o Dia da Consciência Negra no Brasil e, também, foi o da Competência Verde. O futebol feminino do Palmeiras saiu-se campeão paulista e o masculino ficou a apenas dois pontos do líder Botafogo, a quem o Verdão enfrentará na próxima terça-feira, em casa.',
                    content: 'Hoje é o Dia da Consciência Negra no Brasil e, também, foi o da Competência Verde. O futebol feminino do Palmeiras saiu-se campeão paulista e o masculino ficou a apenas dois pontos do líder Botafogo, a quem o Verdão enfrentará na próxima terça-feira, em casa. Melhor dia 20 de novembro para os palmeirenses seria impossível. O jogo no Horto com portões fechados, graças aos cretinos que fizeram o que fizeram no Terreirão do Galo, entre Atlético e Botafogo tinha todos os ingredientes do chamado jogo traiçoeiro. Fosse no Terreirão, a despeito de o Botafogo estar jogando incomparavelmente melhor que o Galo, não haveria favorito.',
                    image: Futebol_04
               },

               {
                    id: 5,
                    title: 'A seleção brasileira só engana a si mesma.',
                    author: 'Alicia Klein',
                    date: '13/11/2024',
                    summary: 'Raphinha saiu do empate com o Uruguai dizendo que o Brasil "jogou para c******". A rima com baralho só mostra o tamanho do buraco em que nos encontramos.',
                    content: 'A estrela do Barcelona claramente bebeu da mesma fonte alucionógena que Dorival Jr., que há meses insiste em uma evolução que só ele vê. Como já repeti inúmeras vezes neste espaço, o primeiro passo para resolver um problema é reconhecer que ele existe. Ou como diz a minha psicóloga, a esperança só é boa quando ancorada na realidade. Fingir que algo está bem, quando todas as evidências apontam para o contrário, aprisiona e paralisa. Como você vai se mover para uma solução se acredita que não precisa mudar? Nosso meio-campo não cria, nossa defesa cede chances por todos os lados, nossos pontas não encontram espaços e finalizam mal. Nosso técnico parece não ter ideias nem antes, nem durante, nem depois das partidas. Não temos um atleta jogando o que joga no seu clube. O oposto: a Amarelinha parece causar uma queda técnica súbita, um efeito quase imediato de piora, um choque de ruindade. É nota 10 lá? É 5 aqui. Não falo aqui de um elemento subjetivo. O Brasil está em quinto nas Eliminatórias. Não tem uma vitória significativa na temporada. Só ganhou dos piores e tomou sufoco dos melhores. Se o comandante e o camisa 10 não enxergam isso, a gente está bem lascado.',
                    image: Futebol_05
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
                                             <p>Em: {post.date}</p>
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
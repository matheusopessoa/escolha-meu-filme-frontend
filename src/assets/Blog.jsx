import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SeoHead from './components/SeoHead';

const BlogContainer = styled.div`
  padding: 20px;
  color: white;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1em;
    color: #ddd;
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const PostCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 5);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 20px;
`;

const PostTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const PostExcerpt = styled.p`
  font-size: 1em;
  color: #eee;
  margin-bottom: 15px;
`;

const PostLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f40612;
  }
`;

const Blog = () => {
  const blogKeywords = 'blog de cinema, blog de filmes, notícias de cinema, críticas de filmes, análises de filmes, ' +
    'resenhas de filmes, novidades cinema, lançamentos filmes, dicas de filmes, artigos sobre cinema, cultura pop, ' +
    'entretenimento, blog filmes 2024, blog streaming, blog netflix, blog prime video, blog disney plus, ' +
    'blog hbo max, blog globoplay, recomendações de filmes, guia de filmes, cinema em casa, filmes online';

  return (
    <Layout>
      <SeoHead 
        type="blog"
        authors={['Escolha Meu Filme']}
        modifiedTime={new Date().toISOString()}
        section="Blog"
        keywords={blogKeywords}
      />
      <BlogContainer>
        <BlogHeader>
          <h1>Blog do Escolha Meu Filme</h1>
          <p>Novidades, dicas e análises do mundo do cinema</p>
        </BlogHeader>
        <PostGrid>
          <PostCard>
            <PostContent>
              <PostTitle>Como Escolher o Filme Perfeito para sua Noite de Cinema              </PostTitle>
              <PostExcerpt>
              Escolher um filme para assistir pode parecer uma tarefa simples, mas quando nos deparamos com milhares de opções.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post1">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Como Analisar um Filme: Um Guia Completo
              </PostTitle>
              <PostExcerpt>
              A análise de filmes vai muito além de simplesmente gostar ou não de uma obra. É uma habilidade que envolve compreender diversos elementos
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post2">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Os Melhores Filmes de 2024 (Até Agora)
              </PostTitle>
              <PostExcerpt>
              O ano de 2024 tem sido extraordinário para o cinema, com lançamentos marcantes em diversos gên
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post3">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Guia Completo dos Gêneros Cinematográficos
              </PostTitle>
              <PostExcerpt>
              Os gêneros cinematográficos são mais do que simples categorias: são linguagens próprias que moldam nossa expectativa e experiência 
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post4">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>A Evolução do Cinema: Das Origens ao Streaming</PostTitle>
              <PostExcerpt>
              A história do cinema é uma fascinante jornada de inovação tecnológica, evolução artística e transformação cultural. Neste artigo
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post5">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>A Arte da Trilha Sonora: Como a Música Transforma o Cinema</PostTitle>
              <PostExcerpt>
              A trilha sonora é um elemento crucial na experiência cinematográfica, capaz de intensificar emoções, criar atmosferas
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post6">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>A Arte da Fotografia no Cinema: Pintando com Luz e Movimento</PostTitle>
              <PostExcerpt>
              A fotografia cinematográfica é uma arte que vai muito além do simples registro de imagens. É através dela que o cinema cria sua linguagem visual 
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post7">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>A Arte da Edição: Como a Montagem Dá Vida ao Cinema</PostTitle>
              <PostExcerpt>
              A edição é frequentemente chamada de "a gramática do cinema", pois é através dela que as imagens captadas ganham sentido
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post8">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>A Magia dos Efeitos Especiais: Da Maquiagem ao CGI</PostTitle>
              <PostExcerpt>
              Os efeitos especiais são uma parte fundamental da magia do cinema, permitindo que cineastas deem vida a mundos fantásticos
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post9">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>A Arte do Roteiro: Construindo Histórias que Marcam</PostTitle>
              <PostExcerpt>
              O roteiro é o alicerce sobre o qual todo filme é construído. É a primeira etapa na transformação de uma ideia em uma experiência cinematográfica
              </PostExcerpt> 
              <PostLink as={Link} to="/blog/post10">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Filme do Minecraft: Tudo Sobre a Adaptação com Jack Black e Jason Momoa</PostTitle>
              <PostExcerpt>
              Depois de anos de expectativa, o universo pixelado de Minecraft está finalmente chegando às telonas em formato live-action
              </PostExcerpt> 
              <PostLink as={Link} to="/blog/post11">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Lilo & Stitch Live-Action: Elenco, Data e o Retorno da Voz Original de Stitch</PostTitle>
              <PostExcerpt>
              "'Ohana quer dizer família. Família quer dizer nunca abandonar ou esquecer." Poucas frases da Disney marcaram tanto uma geração quanto esta.
              </PostExcerpt> 
              <PostLink as={Link} to="/blog/post12">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>
        </PostGrid>
      </BlogContainer>
    </Layout>
  );
};

export default Blog;

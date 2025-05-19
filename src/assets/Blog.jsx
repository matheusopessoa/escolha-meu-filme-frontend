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
              <PostTitle>Os 10 Melhores Filmes de Ficção Científica da Década</PostTitle>
              <PostExcerpt>
                De Interestelar a Blade Runner 2049, confira nossa seleção dos melhores filmes de ficção científica dos últimos anos.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post1">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Clássicos do Terror que Você Precisa Assistir</PostTitle>
              <PostExcerpt>
                Prepare a pipoca e confira nossa lista de filmes de terror clássicos que vão te deixar sem dormir.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post2">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>As Melhores Comédias Românticas de Todos os Tempos</PostTitle>
              <PostExcerpt>
                Para rir e se apaixonar: confira nossa seleção das melhores comédias românticas que marcaram época.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post3">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Animações Imperdíveis para Todas as Idades</PostTitle>
              <PostExcerpt>
                Do Studio Ghibli à Pixar, descubra animações que encantam crianças e adultos.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post4">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Os Filmes de Ação Mais Emocionantes dos Anos 90</PostTitle>
              <PostExcerpt>
                Explosões, perseguições e muita adrenalina: relembre os filmes de ação que marcaram os anos 90.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post5">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Dramas Inesquecíveis que Vão Tocar Seu Coração</PostTitle>
              <PostExcerpt>
                Prepare os lenços e confira nossa seleção de dramas que emocionam e fazem refletir.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post6">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Suspenses Psicológicos que Vão Te Deixar Sem Fôlego</PostTitle>
              <PostExcerpt>
                Mentes brilhantes, reviravoltas e muita tensão: descubra os melhores suspenses psicológicos do cinema.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post7">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Aventuras Épicas que Você Não Pode Perder</PostTitle>
              <PostExcerpt>
                De Indiana Jones a Senhor dos Anéis, embarque em aventuras inesquecíveis com nossos filmes selecionados.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post8">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Os Melhores Filmes de Guerra de Todos os Tempos</PostTitle>
              <PostExcerpt>
                Conflitos, heroísmo e histórias impactantes: confira nossa lista dos melhores filmes de guerra já feitos.
              </PostExcerpt>
              <PostLink as={Link} to="/blog/post9">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostContent>
              <PostTitle>Mistérios Envolventes que Vão Te Surpreender</PostTitle>
              <PostExcerpt>
                Detetives, enigmas e finais surpreendentes: descubra os melhores filmes de mistério para testar suas habilidades de dedução.
              </PostExcerpt> 
              <PostLink as={Link} to="/blog/post10">Continuar lendo...</PostLink>
            </PostContent>
          </PostCard>
        </PostGrid>
      </BlogContainer>
    </Layout>
  );
};

export default Blog;

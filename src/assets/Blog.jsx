import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from './components/Background';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import PurpleButton from './components/PurpleButton';
import Footer from './components/Footer';
import Header from './components/Header';
import GoogleAd from '../components/GoogleAd';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const PostCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #FFA500, #FF4500);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const PostTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 15px;
  line-height: 1.4;
  font-weight: 600;
  position: relative;
  padding-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #FFA500;
    transition: width 0.3s ease;
  }

  ${PostCard}:hover &::after {
    width: 100px;
  }
`;

const PostDate = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '📅';
    font-size: 1rem;
  }
`;

const PostContent = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 25px;
  flex-grow: 1;
`;

const ReadMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
    border-color: rgba(255, 255, 255, 0.2);

    &::after {
      transform: translateX(5px);
    }
  }
`;

const AdContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const BlogHeader = styled.div`
  margin-bottom: 10px;
  margin-top: 50px;    
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  backdrop-filter: blur(2px);
  text-align: center;
`;

const BlogTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  padding: 15px 0;
  text-shadow: 
    2px 2px 0 #FF4500,
    4px 4px 0 rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #FFA500, #FF4500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -10px;
    right: -10px;
    bottom: -5px;
    background: linear-gradient(45deg, rgba(255, 165, 0, 0.2), rgba(255, 69, 0, 0.2));
    border-radius: 8px;
    z-index: -1;
    transform: skew(-3deg);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #FFA500, transparent);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;

const AdWrapper = styled.div`
  min-height: ${props => props.height || '90px'};
  width: ${props => props.width || '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin: 20px 0;
`;

export default function Blog() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Simulando carregamento de posts
    const loadPosts = async () => {
      try {
        // Aqui você pode fazer uma chamada API real
        const dummyPosts = [
          {
            id: 1,
            title: 'O Impacto do Streaming no Cinema',
            date: '15 de Março, 2025',
            content: 'Como as plataformas de streaming estão transformando a indústria cinematográfica...',
            path: '/blog/post1'
          },
          {
            id: 2,
            title: 'A Evolução dos Efeitos Especiais',
            date: '12 de Março, 2025',
            content: 'Uma análise sobre como os efeitos especiais evoluíram ao longo dos anos...',
            path: '/blog/post2'
          },
          {
            id: 3,
            title: 'O Poder das Narrativas Independentes',
            date: '10 de Março, 2025',
            content: 'Como filmes independentes estão ganhando espaço e reconhecimento...',
            path: '/blog/post3'
          },
          {
            id: 4,
            title: 'Cinema e Tecnologia: Uma Parceria em Constante Evolução',
            date: '8 de Março, 2025',
            content: 'As inovações tecnológicas que estão moldando o futuro do cinema...',
            path: '/blog/post4'
          },
          {
            id: 5,
            title: 'A Importância da Representatividade no Cinema',
            date: '6 de Março, 2025',
            content: 'Como a diversidade está transformando a indústria cinematográfica...',
            path: '/blog/post5'
          },
          {
            id: 6,
            title: 'O Renascimento do Cinema de Arte',
            date: '4 de Março, 2025',
            content: 'Como o cinema de arte está conquistando novas audiências...',
            path: '/blog/post6'
          },
          {
            id: 7,
            title: 'A Evolução dos Gêneros Cinematográficos',
            date: '3 de Março, 2025',
            content: 'Como os gêneros do cinema se transformaram ao longo do tempo...',
            path: '/blog/post7'
          },
          {
            id: 8,
            title: 'A Arte da Animação Moderna',
            date: '2 de Março, 2025',
            content: 'Como a animação evoluiu além dos desenhos animados...',
            path: '/blog/post8'
          },
          {
            id: 9,
            title: 'O Poder do Cinema Documental',
            date: '1 de Março, 2025',
            content: 'Como os documentários estão mudando o mundo...',
            path: '/blog/post9'
          },
          {
            id: 10,
            title: 'A Importância da Trilha Sonora',
            date: '28 de Fevereiro, 2025',
            content: 'Como a música transforma a experiência cinematográfica...',
            path: '/blog/post10'
          }
        ];
        
        setPosts(dummyPosts);
        setContentReady(true);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleBackToHome = () => {
    const header = document.querySelector('header');
    header?.scrollIntoView({ behavior: 'smooth' });
    navigate('/');
  };

  const renderAd = (slot, style) => {
    if (!contentReady) {
      return (
        <AdWrapper height={style.height} width={style.width}>
          <LoadingContainer>Carregando...</LoadingContainer>
        </AdWrapper>
      );
    }

    return (
      <AdWrapper height={style.height} width={style.width}>
        <GoogleAd
          adSlot={slot}
          style={style}
        />
      </AdWrapper>
    );
  };

  if (isLoading) {
    return (
      <Background>
        <Header />
        <BlogContainer>
          <BlogHeader>
            <BlogTitle>Notícias e Artigos sobre Cinema</BlogTitle>
          </BlogHeader>
          <LoadingContainer>Carregando posts...</LoadingContainer>
        </BlogContainer>
        <Footer />
      </Background>
    );
  }

  return (
    <Background>
      <Header />
      <BlogContainer>
        <BlogHeader>
          <BlogTitle>Notícias e Artigos sobre Cinema</BlogTitle>
        </BlogHeader>

        {renderAd("8901234567", { display: 'block', width: '100%', height: '90px' })}

        <PostsContainer>
          {posts.map(post => (
            <PostCard key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date}</PostDate>
              <PostContent>{post.content}</PostContent>
              <ReadMoreButton to={post.path}>
                Ler mais
              </ReadMoreButton>
            </PostCard>
          ))}
        </PostsContainer>

        {renderAd("9012345678", { display: 'block', width: '300px', height: '250px' })}

        <ButtonContainer>
          <PurpleButton onClick={handleBackToHome}>
            Voltar ao início
          </PurpleButton>
        </ButtonContainer>
      </BlogContainer>
      <Footer />
    </Background>
  );
} 
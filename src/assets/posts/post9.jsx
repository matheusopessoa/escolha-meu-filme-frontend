import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../components/Background';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import PurpleButton from '../components/PurpleButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GoogleAd from '../../components/GoogleAd';
const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PostContent = styled.article`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 20px 0;
`;

const PostDate = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const PostText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;

  p {
    margin-bottom: 20px;
  }

  h2 {
    color: #FFA500;
    font-size: 1.8rem;
    margin: 30px 0 20px;
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const AdContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export default function Post9() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    const header = document.querySelector('header');
    header?.scrollIntoView({ behavior: 'smooth' });
    navigate('/');
  };

  return (
    <Background>
      <Header />
      <PostContainer>
        <Title>O Poder do Cinema Documental</Title>
        <Subtitle>Como os documentários estão mudando o mundo</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>1 de Março, 2025</PostDate>
          <PostText>
            <p>
              Documentários estão ganhando cada vez mais espaço, com plataformas de streaming 
              investindo em produções que contam histórias reais. Filmes como 'The Social Dilemma' 
              e 'Seaspiracy' têm o poder de mudar perspectivas e iniciar conversas importantes.
            </p>

            <h2>Impacto Social</h2>
            <p>
              Os documentários têm um impacto significativo:
            </p>
            <ul>
              <li>Conscientização</li>
              <li>Mudança de comportamento</li>
              <li>Educação</li>
              <li>Mobilização social</li>
              <li>Preservação histórica</li>
            </ul>

            <h2>Novas Plataformas</h2>
            <p>
              O streaming revolucionou o gênero:
            </p>
            <ul>
              <li>Netflix</li>
              <li>Amazon Prime</li>
              <li>HBO Max</li>
              <li>Disney+</li>
              <li>YouTube</li>
            </ul>

            <h2>Temas Relevantes</h2>
            <p>
              Os documentários abordam temas importantes:
            </p>
            <ul>
              <li>Meio ambiente</li>
              <li>Justiça social</li>
              <li>Saúde</li>
              <li>Tecnologia</li>
              <li>História</li>
            </ul>

            <h2>Produção Independente</h2>
            <p>
              A produção se tornou mais acessível:
            </p>
            <ul>
              <li>Equipamentos acessíveis</li>
              <li>Distribuição digital</li>
              <li>Crowdfunding</li>
              <li>Redes sociais</li>
              <li>Festivais online</li>
            </ul>

            <h2>O Futuro dos Documentários</h2>
            <p>
              O futuro parece promissor:
            </p>
            <ul>
              <li>Mais interatividade</li>
              <li>Realidade virtual</li>
              <li>Narrativas imersivas</li>
              <li>Maior alcance</li>
            </ul>

            <p>
              A acessibilidade das câmeras e equipamentos democratizou a produção de documentários. 
              O gênero continua sendo uma ferramenta poderosa para educação e conscientização, 
              com potencial para causar mudanças significativas na sociedade.
            </p>
          </PostText>
        </PostContent>

        <AdContainer>
          <GoogleAd
            adSlot="9012345678"
            style={{ display: 'block', width: '300px', height: '250px' }}
          />
        </AdContainer>

        <ButtonContainer>
          <PurpleButton onClick={handleBackToHome}>
            Voltar ao início
          </PurpleButton>
        </ButtonContainer>
      </PostContainer>
      <Footer />
      <div className="flex flex-col items-center justify-center min-h-screen gap-2">
        <Title>A Importância da Trilha Sonora</Title>
        <Subtitle>Como a música transforma a experiência do cinema</Subtitle>
        <AdContainer>
          <GoogleAd 
            adSlot="8901234567" 
            adFormat="horizontal"
            adLayout="in-article"
            adStyle={{ 
              display: 'block', 
              width: '100%', 
              height: '90px',
              maxHeight: '90px',
              overflow: 'hidden'
            }}
          />
        </AdContainer>
        <PostContainer>
          <PostContent>
            <PostDate>1 de Março, 2025</PostDate>
            <PostText>
              A música é um elemento fundamental no cinema, capaz de transformar completamente a experiência do espectador.

              Compositores como Hans Zimmer e John Williams criaram algumas das trilhas sonoras mais memoráveis da história do cinema.

              A trilha sonora pode criar atmosfera, desenvolver personagens e guiar as emoções do público.

              O som é tão importante quanto a imagem na criação de uma experiência cinematográfica completa.
            </PostText>
          </PostContent>
          <AdContainer>
            <GoogleAd 
              adSlot="9012345678" 
              adFormat="rectangle"
              adLayout="in-article"
              adStyle={{ 
                display: 'block', 
                width: '300px', 
                height: '250px',
                maxHeight: '250px',
                overflow: 'hidden'
              }}
            />
          </AdContainer>
          <ButtonContainer>
            <PurpleButton
              onClick={handleBackToHome}
              className="w-48"
            >
              Voltar ao início
            </PurpleButton>
          </ButtonContainer>
        </PostContainer>
      </div>
      <Footer />
    </Background>
  );
} 
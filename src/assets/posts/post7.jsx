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

export default function Post7() {
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
        <Title>A Evolução dos Gêneros Cinematográficos</Title>
        <Subtitle>Como os gêneros do cinema se transformaram ao longo do tempo</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>3 de Março, 2025</PostDate>
          <PostText>
            <p>
              Os gêneros cinematográficos estão em constante evolução, refletindo mudanças sociais, 
              culturais e tecnológicas. O que antes eram categorias bem definidas agora se misturam 
              e se transformam, criando novas formas de contar histórias e expressar ideias.
            </p>

            <h2>Gêneros Clássicos</h2>
            <p>
              Os gêneros tradicionais incluem:
            </p>
            <ul>
              <li>Drama</li>
              <li>Comédia</li>
              <li>Ação</li>
              <li>Romance</li>
              <li>Ficção científica</li>
            </ul>

            <h2>Fusão de Gêneros</h2>
            <p>
              A mistura de gêneros tem criado novas categorias:
            </p>
            <ul>
              <li>Drama de ação</li>
              <li>Comédia romântica</li>
              <li>Thriller psicológico</li>
              <li>Drama histórico</li>
              <li>Ficção científica social</li>
            </ul>

            <h2>Influências Culturais</h2>
            <p>
              Diferentes culturas têm contribuído para a evolução dos gêneros:
            </p>
            <ul>
              <li>Cinema asiático</li>
              <li>Cinema europeu</li>
              <li>Cinema latino-americano</li>
              <li>Cinema africano</li>
              <li>Cinema do Oriente Médio</li>
            </ul>

            <h2>Novas Tendências</h2>
            <p>
              O cinema contemporâneo apresenta novas tendências:
            </p>
            <ul>
              <li>Narrativas não-lineares</li>
              <li>Documentários híbridos</li>
              <li>Filmes de gênero</li>
              <li>Cinema experimental</li>
              <li>Filmes de gênero</li>
            </ul>

            <h2>O Futuro dos Gêneros</h2>
            <p>
              O futuro dos gêneros cinematográficos parece promissor:
            </p>
            <ul>
              <li>Mais experimentação</li>
              <li>Maior diversidade</li>
              <li>Novas formas de narrativa</li>
              <li>Fusão com outras mídias</li>
            </ul>

            <p>
              A evolução dos gêneros cinematográficos continua, refletindo a complexidade e 
              diversidade da experiência humana. À medida que a sociedade muda, o cinema se 
              adapta, criando novas formas de contar histórias e expressar ideias.
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
    </Background>
  );
} 
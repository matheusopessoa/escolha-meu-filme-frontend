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

export default function Post6() {
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
        <Title>O Renascimento do Cinema de Arte</Title>
        <Subtitle>Como o cinema de arte está conquistando novas audiências</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>4 de Março, 2025</PostDate>
          <PostText>
            <p>
              O cinema de arte está passando por um renascimento significativo, atraindo novas 
              audiências e ganhando reconhecimento mainstream. Filmes que antes eram considerados 
              nicho estão agora alcançando um público mais amplo, graças a uma combinação de fatores 
              que incluem streaming, redes sociais e uma crescente apreciação por narrativas 
              complexas.
            </p>

            <h2>O Que Define o Cinema de Arte</h2>
            <p>
              O cinema de arte se caracteriza por:
            </p>
            <ul>
              <li>Foco em narrativas experimentais</li>
              <li>Exploração de temas complexos</li>
              <li>Estética visual única</li>
              <li>Liberdade criativa</li>
            </ul>

            <h2>Mudanças no Público</h2>
            <p>
              O público do cinema de arte está evoluindo:
            </p>
            <ul>
              <li>Maior interesse em filmes internacionais</li>
              <li>Busca por narrativas diferentes</li>
              <li>Apreciação por estilos únicos</li>
              <li>Engajamento em discussões online</li>
            </ul>

            <h2>O Papel do Streaming</h2>
            <p>
              Plataformas de streaming têm sido fundamentais para o renascimento do cinema de arte:
            </p>
            <ul>
              <li>Acesso facilitado a filmes internacionais</li>
              <li>Recomendações personalizadas</li>
              <li>Conteúdo curado</li>
              <li>Produções originais arrojadas</li>
            </ul>

            <h2>Festivais e Distribuição</h2>
            <p>
              Festivais de cinema continuam sendo vitais:
            </p>
            <ul>
              <li>Descoberta de novos talentos</li>
              <li>Networking na indústria</li>
              <li>Exposição para distribuidores</li>
              <li>Construção de audiência</li>
            </ul>

            <h2>O Futuro do Cinema de Arte</h2>
            <p>
              O futuro parece promissor para o cinema de arte:
            </p>
            <ul>
              <li>Mais oportunidades de financiamento</li>
              <li>Novas formas de distribuição</li>
              <li>Maior aceitação do público</li>
              <li>Fusão com outros gêneros</li>
            </ul>

            <p>
              O cinema de arte está mais acessível e relevante do que nunca, oferecendo uma 
              alternativa valiosa ao cinema mainstream e enriquecendo a experiência cinematográfica 
              para todos os tipos de espectadores.
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
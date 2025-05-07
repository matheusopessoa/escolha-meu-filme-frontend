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

export default function Post5() {
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
        <Title>A Importância da Representatividade no Cinema</Title>
        <Subtitle>Como a diversidade está transformando a indústria cinematográfica</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>6 de Março, 2025</PostDate>
          <PostText>
            <p>
              A representatividade no cinema tem ganhado cada vez mais importância, com filmes como 
              'Pantera Negra' e 'Parasita' mostrando o poder da diversidade nas telas. A inclusão de 
              diferentes culturas, gêneros e perspectivas não é apenas uma questão de justiça social, 
              mas também de qualidade artística.
            </p>

            <h2>O Poder da Representação</h2>
            <p>
              A representatividade no cinema é importante por várias razões:
            </p>
            <ul>
              <li>Reflete a diversidade da sociedade</li>
              <li>Dá voz a histórias marginalizadas</li>
              <li>Inspira novas gerações</li>
              <li>Promove empatia e compreensão</li>
            </ul>

            <h2>Mudanças na Indústria</h2>
            <p>
              A indústria cinematográfica tem passado por transformações significativas:
            </p>
            <ul>
              <li>Mais oportunidades para diretores diversos</li>
              <li>Histórias de diferentes culturas</li>
              <li>Personagens mais complexos e autênticos</li>
              <li>Equipes de produção mais inclusivas</li>
            </ul>

            <h2>Impacto Cultural</h2>
            <p>
              Filmes diversos têm um impacto profundo na sociedade:
            </p>
            <ul>
              <li>Quebram estereótipos</li>
              <li>Promovem diálogo cultural</li>
              <li>Inspiram mudanças sociais</li>
              <li>Criam novas referências</li>
            </ul>

            <h2>Desafios e Progresso</h2>
            <p>
              Apesar dos avanços, ainda existem desafios:
            </p>
            <ul>
              <li>Necessidade de mais oportunidades</li>
              <li>Representação autêntica</li>
              <li>Inclusão em todos os níveis</li>
              <li>Combate ao tokenismo</li>
            </ul>

            <h2>O Futuro da Representatividade</h2>
            <p>
              O futuro do cinema depende da diversidade. Filmes que representam diferentes vozes e 
              perspectivas tendem a:
            </p>
            <ul>
              <li>Alcançar públicos mais amplos</li>
              <li>Contar histórias mais ricas</li>
              <li>Promover mudanças positivas</li>
              <li>Inspirar novas gerações</li>
            </ul>

            <p>
              A representatividade no cinema não é apenas uma tendência, mas uma necessidade para 
              que a arte continue relevante e significativa para todos.
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
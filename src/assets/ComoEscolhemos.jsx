import React from 'react';
import styled from 'styled-components';
import PurpleButton from './components/PurpleButton';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ComoEscolhemosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 30px;
  max-width: 800px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export default function ComoEscolhemos() {
  return (
    <Layout>
      <ComoEscolhemosContainer>
        <Title>Como Escolhemos os Filmes</Title>
        
        <Section>
          <SectionTitle>Nossa Metodologia</SectionTitle>
          <Paragraph>
            No Escolha Meu Filme, desenvolvemos uma metodologia única e abrangente para 
            garantir que nossas recomendações sejam sempre relevantes e de alta qualidade. 
            Combinamos análise de dados, curadoria humana e tecnologia avançada para 
            criar uma experiência personalizada de descoberta de filmes.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Coleta e Análise de Dados</SectionTitle>
          <Paragraph>
            Nossa base de dados é constantemente atualizada através de:
          </Paragraph>
          <ul>
            <li>Integração com APIs oficiais das principais plataformas de streaming</li>
            <li>Monitoramento diário de lançamentos e atualizações de catálogo</li>
            <li>Análise de tendências e popularidade em tempo real</li>
            <li>Acompanhamento de críticas especializadas e avaliações do público</li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>Critérios de Avaliação</SectionTitle>
          <Paragraph>
            Cada filme em nossa plataforma passa por uma avaliação rigorosa que considera:
          </Paragraph>
          <ul>
            <li>
              <strong>Qualidade Narrativa:</strong>
              <ul>
                <li>Desenvolvimento da história e personagens</li>
                <li>Originalidade e criatividade do roteiro</li>
                <li>Coerência e ritmo da narrativa</li>
                <li>Impacto emocional e profundidade temática</li>
              </ul>
            </li>
            <li>
              <strong>Aspectos Técnicos:</strong>
              <ul>
                <li>Direção e fotografia</li>
                <li>Qualidade das atuações</li>
                <li>Edição e montagem</li>
                <li>Trilha sonora e design de som</li>
              </ul>
            </li>
            <li>
              <strong>Relevância Cultural:</strong>
              <ul>
                <li>Impacto social e cultural</li>
                <li>Representatividade e diversidade</li>
                <li>Inovação no gênero</li>
                <li>Preservação histórica</li>
              </ul>
            </li>
            <li>
              <strong>Recepção:</strong>
              <ul>
                <li>Avaliações da crítica especializada</li>
                <li>Notas do público em diferentes plataformas</li>
                <li>Prêmios e reconhecimentos</li>
                <li>Longevidade e influência</li>
              </ul>
            </li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>Algoritmo de Recomendação</SectionTitle>
          <Paragraph>
            Nosso sistema de recomendação utiliza tecnologia avançada para criar 
            sugestões personalizadas:
          </Paragraph>
          <ul>
            <li>
              <strong>Machine Learning:</strong>
              <ul>
                <li>Análise de padrões de preferência</li>
                <li>Identificação de correlações entre filmes</li>
                <li>Adaptação contínua às tendências</li>
                <li>Aprendizado com feedback dos usuários</li>
              </ul>
            </li>
            <li>
              <strong>Filtros Inteligentes:</strong>
              <ul>
                <li>Combinação de múltiplos gêneros</li>
                <li>Consideração de subgêneros e temas</li>
                <li>Análise de elementos específicos (diretor, elenco, época)</li>
                <li>Adaptação à disponibilidade nas plataformas</li>
              </ul>
            </li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>Curadoria Humana</SectionTitle>
          <Paragraph>
            Além da tecnologia, mantemos uma equipe de especialistas que:
          </Paragraph>
          <ul>
            <li>Avaliam manualmente novos lançamentos</li>
            <li>Criam listas temáticas especiais</li>
            <li>Verificam a qualidade das recomendações</li>
            <li>Ajustam critérios de classificação</li>
            <li>Garantem diversidade no catálogo</li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>Atualização Constante</SectionTitle>
          <Paragraph>
            Nosso compromisso com a qualidade inclui:
          </Paragraph>
          <ul>
            <li>Monitoramento diário de novos lançamentos</li>
            <li>Atualização semanal dos rankings</li>
            <li>Revisão mensal dos critérios de avaliação</li>
            <li>Adaptação a mudanças no mercado de streaming</li>
            <li>Incorporação de feedback dos usuários</li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>Compromisso com a Qualidade</SectionTitle>
          <Paragraph>
            Nossa missão é ajudar você a descobrir filmes que realmente valem a pena. 
            Por isso, mantemos padrões rigorosos e uma metodologia transparente, 
            sempre buscando aprimorar nossa plataforma com base em dados, 
            expertise cinematográfica e feedback da comunidade.
          </Paragraph>
        </Section>
        
        <ButtonContainer>
          <PurpleButton as={Link} to="/">
            Voltar para a página inicial
          </PurpleButton>
        </ButtonContainer>
      </ComoEscolhemosContainer>
    </Layout>
  );
}

import React from 'react';
import styled from 'styled-components';
import Footer from '../assets/components/Footer';
import { privacyContent } from '../data/staticContent';
import BackButton from '../components/BackButton';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const Privacidade = () => {
  return (
    <Container>
      <BackButton />
      <Title>Política de Privacidade</Title>
      
      <Section>
        <SectionTitle>1. Introdução</SectionTitle>
        <Text>
          Bem-vindo à Política de Privacidade do Escolha Meu Filme. Esta política descreve como coletamos, 
          usamos e protegemos suas informações pessoais quando você utiliza nosso site. Estamos comprometidos 
          em proteger sua privacidade e garantir que suas informações pessoais sejam tratadas com segurança.
        </Text>
      </Section>

      <Section>
        <SectionTitle>2. Informações que Coletamos</SectionTitle>
        <Text>
          Coletamos informações que você nos fornece diretamente, incluindo:
        </Text>
        <List>
          <ListItem>Informações de perfil (nome, email)</ListItem>
          <ListItem>Preferências de filmes</ListItem>
          <ListItem>Comentários e avaliações</ListItem>
          <ListItem>Dados de uso do site</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. Uso de Cookies</SectionTitle>
        <Text>
          Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. 
          Os cookies nos ajudam a:
        </Text>
        <List>
          <ListItem>Lembrar suas preferências</ListItem>
          <ListItem>Analisar o uso do site</ListItem>
          <ListItem>Personalizar conteúdo e anúncios</ListItem>
          <ListItem>Melhorar a segurança</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Publicidade</SectionTitle>
        <Text>
          Utilizamos a plataforma Adsterra para exibir anúncios em nosso site. O Adsterra utiliza 
          suas próprias tecnologias para exibir anúncios baseados em diversos fatores. É importante destacar que:
        </Text>
        <List>
          <ListItem>O Adsterra tem sua própria política de privacidade e termos de uso</ListItem>
          <ListItem>Não controlamos quais anúncios serão exibidos em nosso site</ListItem>
          <ListItem>Não temos acesso aos dados coletados pelo Adsterra</ListItem>
          <ListItem>Quaisquer questões relacionadas aos anúncios devem ser tratadas diretamente com o Adsterra</ListItem>
          <ListItem>Não nos responsabilizamos pelo conteúdo dos anúncios ou pelos produtos/serviços anunciados</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>5. Compartilhamento de Dados</SectionTitle>
        <Text>
          Não vendemos suas informações pessoais. Compartilhamos dados apenas com:
        </Text>
        <List>
          <ListItem>Provedores de serviços (como Google AdSense)</ListItem>
          <ListItem>Parceiros de análise</ListItem>
          <ListItem>Quando exigido por lei</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>6. Seus Direitos</SectionTitle>
        <Text>
          Você tem o direito de:
        </Text>
        <List>
          <ListItem>Acessar suas informações pessoais</ListItem>
          <ListItem>Corrigir dados imprecisos</ListItem>
          <ListItem>Solicitar a exclusão de seus dados</ListItem>
          <ListItem>Optar por não receber comunicações de marketing</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>7. Segurança</SectionTitle>
        <Text>
          Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
          pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
        </Text>
      </Section>

      <Section>
        <SectionTitle>8. Alterações na Política</SectionTitle>
        <Text>
          Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas 
          através do site ou por email.
        </Text>
      </Section>
    </Container>
  );
};

export default Privacidade; 
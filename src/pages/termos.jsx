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

const Termos = () => {
  return (
    <Container>
      <BackButton />
      <Title>Termos de Uso</Title>
      
      <Section>
        <SectionTitle>1. Aceitação dos Termos</SectionTitle>
        <Text>
          Ao acessar e usar o Escolha Meu Filme, você concorda em cumprir estes termos de uso. 
          Se você não concordar com qualquer parte destes termos, não poderá acessar o site.
        </Text>
      </Section>

      <Section>
        <SectionTitle>2. Uso do Serviço</SectionTitle>
        <Text>
          O Escolha Meu Filme é um serviço de recomendação de filmes que:
        </Text>
        <List>
          <ListItem>Fornece recomendações personalizadas de filmes</ListItem>
          <ListItem>Permite filtrar por plataformas de streaming</ListItem>
          <ListItem>Oferece conteúdo informativo sobre cinema</ListItem>
          <ListItem>Facilita a descoberta de novos filmes</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. Responsabilidades do Usuário</SectionTitle>
        <Text>
          Ao usar nosso serviço, você concorda em:
        </Text>
        <List>
          <ListItem>Fornecer informações precisas</ListItem>
          <ListItem>Não usar o serviço para fins ilegais</ListItem>
          <ListItem>Respeitar os direitos autorais</ListItem>
          <ListItem>Não tentar acessar áreas restritas do sistema</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Propriedade Intelectual</SectionTitle>
        <Text>
          Todo o conteúdo do Escolha Meu Filme, incluindo textos, imagens, logos e software, 
          é protegido por direitos autorais e outras leis de propriedade intelectual.
        </Text>
      </Section>

      <Section>
        <SectionTitle>5. Limitações de Responsabilidade</SectionTitle>
        <Text>
          O Escolha Meu Filme não se responsabiliza por:
        </Text>
        <List>
          <ListItem>Disponibilidade de filmes nas plataformas de streaming</ListItem>
          <ListItem>Conteúdo de sites externos linkados</ListItem>
          <ListItem>Danos causados por uso indevido do serviço</ListItem>
          <ListItem>Interrupções temporárias do serviço</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>6. Alterações nos Termos</SectionTitle>
        <Text>
          Reservamo-nos o direito de modificar estes termos a qualquer momento. 
          As alterações entram em vigor imediatamente após sua publicação no site.
        </Text>
      </Section>


      <Footer 
        title="Termos de Uso"
        content={`
          <p>
            Ao usar o Escolha Meu Filme, você concorda com nossos termos de uso. 
            Estes termos estabelecem as regras e diretrizes para o uso de nossa plataforma.
          </p>
          <p>
            Para mais informações sobre como protegemos seus dados, consulte nossa 
            <a href="/privacidade" style="color: #FFA500; text-decoration: none; margin-left: 5px;">
              Política de Privacidade
            </a>.
          </p>
        `}
        showDefault={false}
      />
    </Container>
  );
};

export default Termos; 
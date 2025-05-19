import React from 'react';
import styled from 'styled-components';
import Footer from '../assets/components/Footer';
import { aboutContent } from '../data/staticContent';
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

const FeatureList = styled.ul`
  list-style-type: none;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: rgba(255, 255, 255, 0.9);

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #fff;
  }
`;

const Sobre = () => {
  return (
    <Container>
      <BackButton />
      <Title>{aboutContent.title}</Title>

      {aboutContent.sections.map((section, index) => (
        <Section key={index}>
          <SectionTitle>{section.title}</SectionTitle>
          <Text>{section.content}</Text>
        </Section>
      ))}

      <Footer 
        title={aboutContent.footer.title}
        content={aboutContent.footer.content}
        showDefault={false}
      />
    </Container>
  );
};

export default Sobre; 
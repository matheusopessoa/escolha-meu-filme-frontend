import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import BackButton from '../components/BackButton';
import Footer from '../assets/components/Footer';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #fff;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ffd700;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  h3 {
    color: #ffd700;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
  
  a {
    color: #ffd700;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }
`;

const Contato = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    alert('Obrigado pelo contato! Responderemos em breve.');
  };

  return (
    <>
      <Helmet>
        <title>Contato - Escolha Meu Filme</title>
        <meta name="description" content="Entre em contato conosco para dúvidas, sugestões ou problemas técnicos." />
        <meta name="keywords" content="contato, suporte, dúvidas, filmes, recomendações" />
      </Helmet>
      
      <Container>
        <BackButton />
        <Title>Contato</Title>
        
        <Section>
          <SectionTitle>Entre em Contato Conosco</SectionTitle>
          <Text>
            Tem alguma dúvida, sugestão ou problema técnico? Estamos aqui para ajudar! 
            Entre em contato conosco através dos canais abaixo.
          </Text>
          
          <ContactInfo>
            <ContactCard>
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:contato@escolhameufilme.com">
                matheuspessoa.tech@gmail.com
                </a>
              </p>
              <p>Resposta em até 10 dias úteis</p>
            </ContactCard>
            
            <ContactCard>
              <h3>🌐 Site</h3>
              <p>
                <a href="https://escolhameufilme.com">
                  escolhameufilme.com
                </a>
              </p>
              <p>Site oficial</p>
            </ContactCard>
            
            <ContactCard>
              <h3>📱 Suporte</h3>
              <p>Atendimento via email</p>
            </ContactCard>
            
            <ContactCard>
              <h3>📍 Localização</h3>
              <p>Brasil</p>
              <p>Site em português brasileiro</p>
            </ContactCard>
          </ContactInfo>
        </Section>
        
        <Section>
          <SectionTitle>Formulário de Contato</SectionTitle>
          <Text>
            Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </Text>
          
          <ContactForm onSubmit={handleSubmit}>
            <Input 
              type="text" 
              placeholder="Seu nome completo" 
              required 
            />
            <Input 
              type="email" 
              placeholder="Seu email" 
              required 
            />
            <Input 
              type="text" 
              placeholder="Assunto" 
              required 
            />
            <TextArea 
              placeholder="Digite sua mensagem aqui..." 
              required 
            />
            <SubmitButton type="submit">
              Enviar Mensagem
            </SubmitButton>
          </ContactForm>
        </Section>
        
        <Section>
          <SectionTitle>Informações Adicionais</SectionTitle>
          <Text>
            <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às 18h (horário de Brasília)
          </Text>
          <Text>
            <strong>Idioma:</strong> Português brasileiro (pt-BR)
          </Text>
          <Text>
            <strong>País:</strong> Brasil
          </Text>
          <Text>
            <strong>Resposta:</strong> Em até 10 dias úteis
          </Text>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default Contato; 
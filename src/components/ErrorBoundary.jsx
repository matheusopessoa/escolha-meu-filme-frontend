import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  text-align: center;
`;

const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #FFA500;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: #FFA500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #FF8C00;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erro capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Ops! Algo deu errado</ErrorTitle>
          <ErrorMessage>
            Desculpe, encontramos um problema ao carregar esta página. 
            Nossa equipe já foi notificada e está trabalhando para resolver.
          </ErrorMessage>
          <Button onClick={() => window.location.href = '/'}>
            Voltar para a página inicial
          </Button>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 
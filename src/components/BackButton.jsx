import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 1000;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/')}>
      ← Voltar
    </Button>
  );
};

export default BackButton; 
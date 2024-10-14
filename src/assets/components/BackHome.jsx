// src/components/BackHome.jsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// Estilizando o botão para posicioná-lo no canto superior direito
const ButtonContainer = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000; // Para garantir que o botão fique acima de outros elementos

  svg {
    font-size: 36px;
    color: white;
  }
`;

const BackHome = ({ goHome }) => {
  const handleClick = () => {
    if (goHome) {
      goHome();
    } else {
      // Como fallback, podemos usar window.location.href para navegar para a raiz
      window.location.href = '/';
    }
  };

  return (
    <ButtonContainer onClick={handleClick}>
      <FontAwesomeIcon icon={faHome} />
    </ButtonContainer>
  );
};

export default BackHome;

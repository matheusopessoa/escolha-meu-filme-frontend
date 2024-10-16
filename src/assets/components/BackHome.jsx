import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
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

const BackHome = () => {
  const navigate = useNavigate(); // Hook deve estar dentro do componente
  const { setSelectedService, setSelectedGenres, setMovies, setTheMovie } = useContext(AppContext); // useContext dentro do componente

  const resetCache = () => {
    setSelectedService(null);
    setSelectedGenres([]);
    setMovies({});
    setTheMovie([]);
  };

  const handleClick = () => {
    resetCache();
    navigate('/');
  };

  return (
    <ButtonContainer onClick={handleClick}>
      <FontAwesomeIcon icon={faHome} />
    </ButtonContainer>
  );
};

export default BackHome;

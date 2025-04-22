import styled from 'styled-components';
import { useState, useEffect } from 'react';
import MenuSanduiche from './MenuSanduiche';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.05);
  background-color:rgba(0, 0, 0, 0.43);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Title = styled.h1`
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  
  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    border-radius: 3px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const Header = () => {
  const navigate = useNavigate();
  
  const handleRefresh = () => {
    window.location.reload();
  };
  const handleNavigate = () => {
    navigate('/');
    handleRefresh();
  };



  return (
    <HeaderContainer>
      <LogoContainer onClick={handleNavigate}>
        <Logo src="/emf-logo.png" alt="Escolha Meu Filme Logo" />
        <Title>Escolha Meu Filme</Title>
      </LogoContainer>
      <MenuSanduiche />
    </HeaderContainer>
  );
};

export default Header; 
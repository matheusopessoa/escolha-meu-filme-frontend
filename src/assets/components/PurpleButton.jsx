// src/components/Button.js
import styled from 'styled-components';

const PurpleButton = styled.button`
  align-self: center; /* <-- esse é o ouro */
  border-radius: 3px;
  border: 2px solid rgba(221, 143, 255, 0.5);
  background: linear-gradient(225deg,rgb(231, 97, 255),rgb(208, 0, 255));
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  padding: 18px 32px;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(225deg,rgb(80, 27, 86),rgb(121, 0, 228));
    transform: scale(1.05);
  }

  &:active {
    border: 2px solid rgba(255, 255, 255, 0.8);
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 14px 28px;
  }
`;


export default PurpleButton;

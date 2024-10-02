// src/components/Button.js
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.47);
  background: ${(props) =>
    props.variant === 'back'
      ? 'linear-gradient(225deg, #FF5C5C 14.89%, #FF0000 85.85%)'  // Estilo avermelhado para "back"
      : props.$isToggled
      ? 'linear-gradient(225deg, #933FFE 14.89%, #18C8FF 85.85%)'
      : 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)'};
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 16px 24px;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.4s ease, border 0.4s ease;

  &:active {
    border: 1px solid rgba(255, 255, 255, 0.8);
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

export default Button;

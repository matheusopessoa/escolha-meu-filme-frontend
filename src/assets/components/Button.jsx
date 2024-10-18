// src/components/Button.js
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(225deg, #00BFFF, #1E90FF);
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
    background: linear-gradient(225deg, #1E90FF, #00BFFF);
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

export default Button;

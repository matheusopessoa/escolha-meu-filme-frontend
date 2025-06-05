// src/components/Button.js
import styled from 'styled-components';

const RedButton = styled.button`
  align-self: center;
  border-radius: 8px;
  border: 2px solid rgba(220, 38, 38, 0.3);
  background: linear-gradient(225deg, #DC2626, #991B1B);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 16px 32px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 15px rgba(220, 38, 38, 0.2);

  &:hover {
    background: linear-gradient(225deg, #B91C1C, #7F1D1D);
    transform: translateY(-2px);
    box-shadow: 0px 6px 20px rgba(220, 38, 38, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 8px rgba(220, 38, 38, 0.2);
    border: 2px solid rgba(220, 38, 38, 0.5);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 0px 3px rgba(220, 38, 38, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    background: linear-gradient(225deg, #9B2C2C, #7F1D1D);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 28px;
  }
`;

export default RedButton;

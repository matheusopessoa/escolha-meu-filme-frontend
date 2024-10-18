// src/components/ButtonList.js
import styled from 'styled-components';

const ButtonList = styled.button`
  border-radius: 3px;  /* Borda arredondada menor */
  background: linear-gradient(225deg, #00BFFF, #1E90FF);  /* Gradiente semelhante ao Button */
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 24px;
  text-align: center;
  width: auto;
  max-width: 250px;
  margin: 10px auto;
  cursor: pointer;
  transition: background 0.4s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(225deg, #1E90FF, #00BFFF);  /* Gradiente invertido no hover */
    transform: scale(1.05);
  }

  &:active {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);  /* Destaque para acessibilidade */
  }

  @media (max-width: 768px) {
    max-width: 200px;
    font-size: 14px;  /* Fonte um pouco menor no mobile */
    padding: 12px 20px;
    margin-top: 20px auto;
  }
`;

export default ButtonList;

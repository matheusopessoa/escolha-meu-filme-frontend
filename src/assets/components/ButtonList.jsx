// src/components/ButtonList.js
import styled from 'styled-components';

const ButtonList = styled.button`
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.47);  /* Borda discreta */
  background: rgba(255, 255, 255, 0.1);  /* Cor de fundo transparente com leve opacidade */
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-weight: 400;  /* Texto mais leve */
  padding: 12px 24px;  /* Adiciona mais espaço dentro do botão */
  text-align: center;
  width: auto;  /* Ajusta a largura para não ocupar toda a linha */
  max-width: 250px;  /* Limita o tamanho máximo */
  margin: 10px auto;  /* Aumenta a distância vertical entre os elementos e centraliza o botão */
  cursor: pointer;
  transition: background 0.3s ease, border 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);  /* Cor de fundo mais clara no hover */
  }

  &:active {
    border: 1px solid rgba(255, 255, 255, 0.8);  /* Destaca a borda no clique */
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    max-width: 200px;  /* Ajusta a largura máxima para dispositivos móveis */
    padding: 10px 16px;  /* Ajusta o padding para telas menores */
    margin-top: 20px auto;  /* Mantém o espaçamento consistente */
  }
`;

export default ButtonList;

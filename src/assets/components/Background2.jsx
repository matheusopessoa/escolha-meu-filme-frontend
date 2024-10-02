import styled from 'styled-components';

const Background2 = styled.div`
  background-image: url('/bgdefault.jpg');
  background-size: cover;
  background-color: #000000;
  background-position: center;
  width: 100vw; /* Garante que o fundo ocupe 100% da largura da viewport */
  height: 100vh; /* Garante que o fundo ocupe 100% da altura da viewport */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    background-image: url('/bg-default-2.png'); /* Imagem para celulares */
  }
`;

export default Background2
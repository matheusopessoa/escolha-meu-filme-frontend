import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/bg4.png');
  background-size: cover;
  background-position: center;
  background-color: #000000;
  background-attachment: fixed; /* 🎯 MANTÉM FIXO NO SCROLL */
  width: 100vw;
  min-height: 100vh; /* 👈 trocado de height pra min-height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    background-image: url('/bg4.png');
  }
`;


export default Background
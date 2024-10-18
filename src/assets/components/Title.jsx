import styled from 'styled-components';

const Title = styled.h1`
  color: var(--black-black-100, #FFF);
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  line-height: 130%;
  padding: 0;

  font-size: ${(props) => (props.home ? '65px' : '56px')};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.home ? '38px' : '34px')};
    line-height: 110%;
    margin: 25% 0 0; /* Adiciona uma margem de 20px no topo e remove margem nas laterais e na parte inferior */

  }
`;

export default Title;

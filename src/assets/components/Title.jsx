import styled from 'styled-components';

const Title = styled.h1`
  color: var(--black-black-100, #FFF);
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  margin: 0;
  padding: 0;

  /* Aplica o tamanho da fonte com base na prop 'home' */
  font-size: ${(props) => (props.home ? '85px' : '36px')};

  @media (max-width: 768px) {
    /* Aplica tamanho menor no mobile proporcionalmente */
    font-size: ${(props) => (props.home ? '48px' : '24px')};
    line-height: 110%;
  }
`;

export default Title;

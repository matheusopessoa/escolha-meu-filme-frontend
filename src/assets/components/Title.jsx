import styled from 'styled-components';

const Title = styled.h1`
  color: var(--black-black-100, #FFF);
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  line-height: 130%;
  padding: 0;
  text-shadow: 1px 1px 2px rgba(57, 57, 57, 0.5);
  margin-top: 80px;
  font-size: ${(props) => (props.home ? '65px' : '56px')};

  @media (max-width: 600px) {
    font-size: ${(props) => (props.home ? '38px' : '34px')};
    line-height: 110%;
  }
`;

export default Title;

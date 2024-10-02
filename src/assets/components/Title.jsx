// src/components/Title.js
import styled from 'styled-components';

const Title = styled.h1`
  color: var(--black-black-100, #FFF);
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 85px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 110%;
  }
`;

export default Title;

// src/components/Subtitle.js
import styled from 'styled-components';

const Subtitle = styled.h4`
  color: var(--black-black-60, #898CA9);
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 140%;
  }
`;

export default Subtitle;

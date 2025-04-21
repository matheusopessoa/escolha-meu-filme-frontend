// src/components/Subtitle.js
import styled from 'styled-components';

const Subtitle = styled.h4`
  color: var(--black-black-60,rgb(255, 255, 255));
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 16px;
  text-shadow: 1px 1px 2px rgba(57, 57, 57, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 140%;
  }
`;

export default Subtitle;

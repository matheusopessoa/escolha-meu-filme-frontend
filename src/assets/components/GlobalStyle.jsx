// src/components/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Evitar barras de rolagem horizontais */
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
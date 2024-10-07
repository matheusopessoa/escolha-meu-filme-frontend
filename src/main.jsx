import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/components/GlobalStyle.jsx'; // Importe o GlobalStyle

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle /> {/* Adicione aqui para garantir que os estilos globais sejam aplicados */}
    <App />
  </React.StrictMode>
);

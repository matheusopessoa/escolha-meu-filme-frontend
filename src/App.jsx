import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import { AppProvider } from './context.jsx'; // O provedor do contexto
import FirstScreen from './assets/screens/Home.jsx'; // Tela inicial

function App() {
  return (
    <AppProvider>
      <div className="App">
        <FirstScreen /> {/* Mantemos a lógica de renderização existente */}
        <Analytics /> {/* Coloque aqui dentro para monitorar todas as interações */}
      </div>
    </AppProvider>
  );
}

export default App;

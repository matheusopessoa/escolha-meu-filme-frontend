import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import { AppProvider } from './context.jsx'; // O provedor do contexto
import { Home, ChooseProviderScreen, ChooseGenresScreen, ChooseMovieScreen, ThankYouScreen, SorryScreen } from './assets/screens/Screens.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
function App() {
  return (
    <Router>
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/streaming' element={<ChooseProviderScreen/>}/>
          <Route path='/generos' element={<ChooseGenresScreen/>}/>
          <Route path='/filmes' element={<ChooseMovieScreen/>}/>
          <Route path='/obrigado' element={<ThankYouScreen/>}/>
          <Route path='/indisponivel' element={<SorryScreen/>}/>
        </Routes>
        <Analytics /> {/* Coloque aqui dentro para monitorar todas as interações */}
      </div>
    </AppProvider>
    </Router>
  );
}

export default App;

import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import MainScreen from './assets/MainScreen.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<MainScreen/>} />
        </Routes>
        <Analytics /> 
      </div>
    </Router>
  );
}

export default App;

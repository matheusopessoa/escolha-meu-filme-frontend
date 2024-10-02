import React, { createContext, useState } from 'react';

// Cria o contexto
export const AppContext = createContext();

// Provedor do contexto
export const AppProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);  // Estado para o serviço de streaming
  const [selectedGenres, setSelectedGenres] = useState([]);      // Estado para os gêneros selecionados

  return (
    <AppContext.Provider value={{ selectedService, setSelectedService, selectedGenres, setSelectedGenres }}>
      {children}
    </AppContext.Provider>
  );
};

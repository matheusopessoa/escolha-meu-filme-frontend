import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState({}); // Aqui armazenamos os filmes retornados

  return (
    <AppContext.Provider value={{ selectedService, setSelectedService, selectedGenres, setSelectedGenres, movies, setMovies }}>
      {children}
    </AppContext.Provider>
  );
};

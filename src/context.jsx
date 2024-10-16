import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState({}); 
  const [theMovie, setTheMovie] = useState([])
  return (
    <AppContext.Provider value={{ selectedService, setSelectedService, selectedGenres, setSelectedGenres, movies, setMovies, theMovie, setTheMovie }}>
      {children}
    </AppContext.Provider>
  );
};

import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Inicialização do estado com o `localStorage`
  const [selectedService, setSelectedService] = useState(() => {
    const service = localStorage.getItem('service');
    return service ? JSON.parse(service) : null;
  });

  const [selectedGenres, setSelectedGenres] = useState(() => {
    const genres = localStorage.getItem('genres');
    return genres ? JSON.parse(genres) : [];
  });

  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : {};
  });

  const [theMovie, setTheMovie] = useState(() => {
    const savedTheMovie = localStorage.getItem('theMovie');
    return savedTheMovie ? JSON.parse(savedTheMovie) : [];
  });

  // Salva `selectedService` no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('service', JSON.stringify(selectedService));
  }, [selectedService]);

  // Salva `selectedGenres` no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('genres', JSON.stringify(selectedGenres));
  }, [selectedGenres]);

  // Salva `movies` no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  // Salva `theMovie` no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('theMovie', JSON.stringify(theMovie));
  }, [theMovie]);

  return (
    <AppContext.Provider value={{ selectedService, setSelectedService, selectedGenres, setSelectedGenres, movies, setMovies, theMovie, setTheMovie }}>
      {children}
    </AppContext.Provider>
  );
};

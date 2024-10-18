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

  const [selectedRelease, setSelectedReleases] = useState(() => { 
    const releases = localStorage.getItem('releases');
    return ['F', 'F', 'F', 'F'];
  });

  const [selectedRuntime, setSelectedRuntime] = useState(() => {
    const runtime = localStorage.getItem('runtime');
    return runtime ? JSON.parse(runtime) : [];
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

  // Corrigido o nome da chave para ser consistente
  useEffect(() => {
    localStorage.setItem('releases', JSON.stringify(selectedRelease)); // Ajustado para 'releases'
  }, [selectedRelease]);

  useEffect(() => {
    localStorage.setItem('runtime', JSON.stringify(selectedRuntime));
  }, [selectedRuntime]);

  return (
    <AppContext.Provider value={{ selectedService, setSelectedService, selectedGenres, setSelectedGenres, movies, setMovies, theMovie, setTheMovie, selectedRelease, setSelectedReleases, selectedRuntime, setSelectedRuntime }}>
      {children}
    </AppContext.Provider>
  );
};

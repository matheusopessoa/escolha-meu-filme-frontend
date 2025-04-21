const SERVER_URL = 'https://api-escolha-meu-filme.up.railway.app/';

export default async function fetchMovies(provider, selectedGenres, isCult) {
    let baseUrl = SERVER_URL + 'movies?';
    //let baseUrl = 'http://localhost:5001/movies'
    selectedGenres = genresBusinessLogic(selectedGenres);
    selectedGenres = createCultParam(isCult, selectedGenres);
    const genreParams = createGenreParams(selectedGenres);
    const providerParam = `provider=${provider}`;

    return fetch(baseUrl + providerParam + '&' + genreParams)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data; 
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

function createGenreParams(selectedGenres) {
    const genreParams = selectedGenres.map((genre) => `genres=${genre}`).join('&');
    return genreParams;
}

function createCultParam(isCult, selectedGenres) {
    if (isCult) {   
        selectedGenres.push('9999');
    }

    return selectedGenres;
}

function genresBusinessLogic(selectedGenres) {
    const genres = selectedGenres.map((genre) => {
        if (typeof genre === 'string') {
            return genres_dict[genre];
        }
        return genre;
    });

    return genres;
}

const genres_dict = {
    'Ação': '28', 'Aventura': '12', 'Comédia': '35', 'Animação': '16', 'Crime': '80', 'Drama': '18', 'Família': '10751', 'Fantasia': '14', 'História': '36', 'Terror': '27',
    'Musical': '10402', 'Mistério': '9648', 'Romance': '10749', 'Ficção Científica': '878', 'Suspense': '53', 'Guerra': '10752', 'Faroeste': '37'
};


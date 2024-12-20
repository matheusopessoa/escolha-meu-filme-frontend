import { AppContext } from '../../context';

const genres_dict = {
  'Ação': 28, 'Aventura': 12, 'Comédia': 35, 'Animação': 16, 'Crime': 80,
  'Documentário': 99, 'Drama': 18, 'Família': 10751, 'Fantasia': 14, 'História': 36,
  'Terror': 27, 'Musical': 10402, 'Mistério': 9648, 'Romance': 10749,
  'Ficção Científica': 878, 'Suspense': 53, 'Guerra': 10752, 'Faroeste': 37
};

// Dicionário de mapeamento de provedores para os valores corretos da API
const providers_dict = {
  'Crunchyroll': 'crunchyroll',
  'Disney Plus': 'disney',
  'Netflix': 'netflix',
  'Amazon Prime': 'amazonprime',
  'Paramount': 'paramount',
  'Max': 'max',
  'AppleTV': 'appletv',
  'Globoplay': 'globoplay',
  'Pluto TV': 'plutotv'
};

// Função para fazer a requisição à API, com mapeamento dos gêneros e provedores
export const fetchMovies = async (provider, selectedGenres, runtime, release_year) => {
  const apiUrlBase = 'https://escolha-meu-filme-production.up.railway.app';  // Usando a URL base da API a partir da variável de ambiente
  //const apiUrlBase = 'http://localhost:5000/'

  // Mapeando os provedores para os valores esperados pela API
  const mappedProvider = providers_dict[provider];
  
  // Mapeando os gêneros para seus respectivos códigos usando o dicionário
  const mappedGenres = selectedGenres.map(genre => genres_dict[genre]);
  

  // Construindo a URL com base no número de gêneros selecionados
  let url = `${apiUrlBase}/movies?provider=${mappedProvider}`;
  
  url += `&runtime=${runtime[0]}&runtime=${runtime[1]}&runtime=${runtime[2]}&runtime=${runtime[3]}`;
  url += `&release_year=${release_year[0]}&release_year=${release_year[1]}&release_year=${release_year[2]}&release_year=${release_year[3]}&release_year=${release_year[4]}`;

  if (mappedGenres.length === 1) {
    url += `&genres=${mappedGenres[0]}`;
  } else if (mappedGenres.length === 2) {
    url += `&genres=${mappedGenres[0]}&genres=${mappedGenres[1]}`;
  } else if (mappedGenres.length === 3) {
    url += `&genres=${mappedGenres[0]}&genres=${mappedGenres[1]}&genres=${mappedGenres[2]}`;
  } 
  
  try {
    const response = await fetch(url);  // Fazendo a requisição GET para a API
    const data = await response.json();  // Obtendo a resposta em formato JSON
    return data;
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
    throw error;
  }
};

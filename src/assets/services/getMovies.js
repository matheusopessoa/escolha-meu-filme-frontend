import { AppContext } from '../../context'; // Verifique o caminho correto

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
  export const fetchMovies = async (provider, selectedGenres) => {
    const apiUrlBase = 'http://127.0.0.1:5000/movies';  // URL base da API
  
    // Mapeando os provedores para os valores esperados pela API
    const mappedProvider = providers_dict[provider];
  
    // Mapeando os gêneros para seus respectivos códigos usando o dicionário
    const mappedGenres = selectedGenres.map(genre => genres_dict[genre]);
  
    // Construindo a URL com base no número de gêneros selecionados
    let url = `${apiUrlBase}?provider=${mappedProvider}`;
    if (mappedGenres.length === 1) {
      url += `&genres=${mappedGenres[0]}`;
    } else if (mappedGenres.length === 2) {
      url += `&genres=${mappedGenres[0]}&genres=${mappedGenres[1]}`;
    }
  
    console.log("URL para a requisição:", url);  // Verifique a URL antes de fazer a requisição
  
    try {
      const response = await fetch(url);  // Fazendo a requisição GET para a API
      const data = await response.json();  // Obtendo a resposta em formato JSON
      console.log("Dados recebidos da API:", data);
      return data;
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
      throw error;
    }
  };
  
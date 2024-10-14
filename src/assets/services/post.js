// src/services/post.js
const sendFeedbackToBackend = async (feedbacks) => {
    const feedbackBody = {
      feedbacks: feedbacks,
    };
  
    try {
      const API_URL = 'https://escolha-meu-filme-production.up.railway.app'; // Lê a URL base da API do ambiente
      // const API_URL = 'http://localhost:5000/'
      const response = await fetch(`${API_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackBody),
      });
  
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
    }
  };
  
  export default sendFeedbackToBackend;
  
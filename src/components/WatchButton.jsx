import styled from 'styled-components';

const WatchButton = styled.button`
  background-color: #10B981;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  &:hover {
    background-color: #059669;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const WatchButtonComponent = ({ provider }) => {
  const getStreamingUrl = (provider) => {
    const baseUrls = {
      netflix: 'https://www.netflix.com',
      amazon: 'https://www.primevideo.com',
      disney: 'https://www.disneyplus.com',
      max: 'https://max.com',
      globoplay: 'https://globoplay.globo.com'
    };

    return baseUrls[provider.toLowerCase()];
  };

  const getProviderIcon = (provider) => {
    const icons = {
      netflix: '🎬',
      amazon: '🎥',
      disney: '✨',
      max: '🎭',
      globoplay: '📺'
    };

    return icons[provider.toLowerCase()] || '🎬';
  };

  return (
    <WatchButton 
      onClick={() => window.open(getStreamingUrl(provider), '_blank')}
      title={`Ir para ${provider}`}
    >
      <span>{getProviderIcon(provider)}</span>
      Ir para {provider}
    </WatchButton>
  );
};

export default WatchButtonComponent; 
import { createBrowserRouter } from 'react-router-dom';
import MainScreen from './assets/MainScreen';
import Top10 from './assets/Top10';
import ComoEscolhemos from './assets/ComoEscolhemos';
import Aleatorio from './assets/Aleatorio';
import TermosDeUso from './assets/TermosDeUso';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />,
  },
  {
    path: '/top10/:type/:option',
    element: <Top10 />,
  },
  {
    path: '/como-escolhemos',
    element: <ComoEscolhemos />,
  },
  {
    path: '/aleatorio',
    element: <Aleatorio />,
  },
  {
    path: '/termos-de-uso',
    element: <TermosDeUso />,
  },
]); 
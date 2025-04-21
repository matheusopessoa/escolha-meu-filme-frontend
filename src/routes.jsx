import { createBrowserRouter } from 'react-router-dom';
import MainScreen from './assets/MainScreen';
import Top10 from './assets/Top10';
import ComoEscolhemos from './assets/ComoEscolhemos';
import Aleatorio from './assets/Aleatorio';

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
]); 
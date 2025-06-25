import { createBrowserRouter } from 'react-router-dom';
import MainScreen from './assets/MainScreen';
import Top10 from './assets/Top10';
import ComoEscolhemos from './assets/ComoEscolhemos';
import Aleatorio from './assets/Aleatorio';
import TermosDeUso from './assets/TermosDeUso';
import AvisoLegal from './assets/AvisoLegal';
import Blog from './assets/Blog';
import Post1 from './assets/posts/post1';
import Post2 from './assets/posts/post2';
import Post3 from './assets/posts/post3';
import Post4 from './assets/posts/post4';
import Post5 from './assets/posts/post5';
import Post6 from './assets/posts/post6';
import Post7 from './assets/posts/post7';
import Post8 from './assets/posts/post8';
import Post9 from './assets/posts/post9';
import Post10 from './assets/posts/post10';
import Post11 from './assets/posts/post11';
import Post12 from './assets/posts/post12';
import Privacidade from './pages/privacidade';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Index from './pages/Index';
import SelectionPage from './pages/SelectionPage';
import ScrollToTop from './components/ScrollToTop';
import { Outlet, Navigate } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/escolher-filme',
        element: <MainScreen />,
      },
      {
        path: '/top10',
        element: <SelectionPage />,
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
        path: '/termos',
        element: <TermosDeUso />,
      },
      {
        path: '/aviso-legal',
        element: <AvisoLegal />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/post1',
        element: <Post1 />,
      },
      {
        path: '/blog/post2',
        element: <Post2 />,
      },
      {
        path: '/blog/post3',
        element: <Post3 />,
      },
      {
        path: '/blog/post4',
        element: <Post4 />,
      },
      {
        path: '/blog/post5',
        element: <Post5 />,
      },
      {
        path: '/blog/post6',
        element: <Post6 />,
      },
      {
        path: '/blog/post7',
        element: <Post7 />,
      },
      {
        path: '/blog/post8',
        element: <Post8 />,
      },
      {
        path: '/blog/post9',
        element: <Post9 />,
      },
      {
        path: '/blog/post10',
        element: <Post10 />,
      },
      {
        path: '/blog/post11',
        element: <Post11 />,
      },
      {
        path: '/blog/post12',
        element: <Post12 />,
      },
      {
        path: '/privacidade',
        element: <Privacidade />,
      },
      {
        path: '/sobre',
        element: <Sobre />,
      },
      {
        path: '/contato',
        element: <Contato />,
      },
    ]
  }
]); 
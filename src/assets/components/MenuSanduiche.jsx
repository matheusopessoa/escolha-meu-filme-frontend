import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MenuContainer = styled.div`
  position: fixed;
  right: 20px;
  z-index: 1000;
`;

const MenuButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  cursor: pointer;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.05);
  }
`;

const MenuLine = styled.div`
  width: 24px;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
  border-radius: 2px;

  ${MenuButton}:hover & {
    background-color: #e6e6e6;
  }
`;

const MenuContent = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  background: rgba(15, 15, 15, 0.95);
  border-radius: 16px;
  padding: 16px;
  min-width: 280px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-origin: top right;
  animation: ${props => props.isOpen ? 'menuAppear 0.3s ease' : 'none'};

  @keyframes menuAppear {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const MenuItem = styled.div`
  color: white;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SubMenu = styled.div`
  margin: 4px 0 8px 16px;
  padding-left: 10px;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: ${props => props.isOpen ? 'submenuAppear 0.3s ease' : 'none'};

  @keyframes submenuAppear {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  ${MenuItem} {
    padding: 8px 16px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const MenuIcon = styled.span`
  font-size: 1.2rem;
`;

export default function MenuSanduiche() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();

  const streamings = ['Netflix', 'Amazon', 'Disney', 'Max', 'Globoplay'];
  const genres = ['Ação', 'Aventura', 'Comédia', 'Animação', 'Crime', 'Drama', 'Família', 'Fantasia', 'História', 'Horror', 'Musical', 'Mistério', 'Romance', 'Ficção Científica', 'Terror', 'Guerra', 'Faroeste'];

  const handleSubMenuClick = (type) => {
    setOpenSubMenu(openSubMenu === type ? null : type);
  };

  const handleOptionClick = (type, option) => {
    navigate(`/top10/${type}/${option}`);
    setIsOpen(false);
    setOpenSubMenu(null);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <MenuContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <MenuLine />
        <MenuLine />
        <MenuLine />
      </MenuButton>
      
      <MenuContent isOpen={isOpen}>
        <MenuItem onClick={() => {
          navigate('/');
          handleRefresh();
        }}>
          <MenuIcon>🎯</MenuIcon>
          Busca Personalizada
        </MenuItem>
        
        <MenuItem onClick={() => handleSubMenuClick('genre')}>
          <MenuIcon>🎭</MenuIcon>
          Melhores por Gênero
        </MenuItem>
        <SubMenu isOpen={openSubMenu === 'genre'}>
          {genres.map(genre => (
            <MenuItem key={genre} onClick={() => handleOptionClick('genre', genre)}>
              {genre}
            </MenuItem>
          ))}
        </SubMenu>

        <MenuItem onClick={() => handleSubMenuClick('streaming')}>
          <MenuIcon>📺</MenuIcon>
          Melhores por Streaming
        </MenuItem>
        <SubMenu isOpen={openSubMenu === 'streaming'}>
          {streamings.map(streaming => (
            <MenuItem key={streaming} onClick={() => handleOptionClick('streaming', streaming)}>
              {streaming}
            </MenuItem>
          ))}
        </SubMenu>

        <MenuItem onClick={() => {
          navigate('/aleatorio');
          setIsOpen(false);
        }}>
          <MenuIcon>🎲</MenuIcon>
          Filme Aleatório
        </MenuItem>

        <MenuItem onClick={() => {
          navigate('/blog');
          setIsOpen(false);
        }}>
          <MenuIcon>📝</MenuIcon>
          Blog
        </MenuItem>
        <MenuItem onClick={() => {
          navigate('/como-escolhemos');
          setIsOpen(false);
        }}>
          <MenuIcon>ℹ️</MenuIcon>
          Sobre Nossa Seleção
        </MenuItem>


      </MenuContent>
    </MenuContainer>
  );
} 
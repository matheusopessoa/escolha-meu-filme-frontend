import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MenuContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MenuLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
`;

const MenuContent = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  padding: 20px;
  min-width: 200px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const MenuItem = styled.div`
  color: white;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SubMenu = styled.div`
  margin-left: 20px;
  display: ${props => props.isOpen ? 'block' : 'none'};
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

  return (
    <MenuContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <MenuLine />
        <MenuLine />
        <MenuLine />
      </MenuButton>
      
      <MenuContent isOpen={isOpen}>
        <MenuItem onClick={() => {
          navigate('/aleatorio');
          setIsOpen(false);
        }}>
          Escolher aleatoriamente
        </MenuItem>
        
        <MenuItem onClick={() => handleSubMenuClick('genre')}>
          Top 10 filmes por gênero
        </MenuItem>
        <SubMenu isOpen={openSubMenu === 'genre'}>
          {genres.map(genre => (
            <MenuItem key={genre} onClick={() => handleOptionClick('genre', genre)}>
              {genre}
            </MenuItem>
          ))}
        </SubMenu>

        <MenuItem onClick={() => handleSubMenuClick('streaming')}>
          Top 10 filmes por streaming
        </MenuItem>
        <SubMenu isOpen={openSubMenu === 'streaming'}>
          {streamings.map(streaming => (
            <MenuItem key={streaming} onClick={() => handleOptionClick('streaming', streaming)}>
              {streaming}
            </MenuItem>
          ))}
        </SubMenu>

        <MenuItem onClick={() => {
          navigate('/como-escolhemos');
          setIsOpen(false);
        }}>
          Como escolhemos filmes
        </MenuItem>
      </MenuContent>
    </MenuContainer>
  );
} 
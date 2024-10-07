import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  color: white;
  max-width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 15px;
    width: 100%;
  }
`;

export default Container;
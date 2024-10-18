import styled from "styled-components";

const SecondaryButton = styled.button`
  background-color: ${(props) => (props.selected ? '#005ab3' : '#2a2a2a')};
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? '#1E90FF' : '#555')};
  }

  @media (max-width: 768px) {
    width: 100%;  /* Para garantir que o botão ocupe toda a largura no mobile */
    padding: 10px;
  }
`;

export default SecondaryButton;
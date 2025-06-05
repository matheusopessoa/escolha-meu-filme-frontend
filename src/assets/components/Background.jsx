import styled from 'styled-components';

const Background = styled.div`
  background: rgb(17, 24, 39);
  background: linear-gradient(
    135deg,
    rgb(17, 24, 39) 0%,
    rgb(31, 17, 17) 50%,
    rgb(17, 24, 39) 100%
  );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(220, 38, 38, 0.15) 0%,
      rgba(17, 24, 39, 0) 70%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    pointer-events: none;
    animation: grain 8s steps(10) infinite;
  }

  @keyframes grain {
    0%, 100% { transform: translate(0, 0) }
    10% { transform: translate(-5%, -5%) }
    20% { transform: translate(-10%, 5%) }
    30% { transform: translate(5%, -10%) }
    40% { transform: translate(-5%, 15%) }
    50% { transform: translate(-10%, 5%) }
    60% { transform: translate(15%, 0%) }
    70% { transform: translate(0%, 10%) }
    80% { transform: translate(-15%, 0%) }
    90% { transform: translate(10%, 5%) }
  }
`;

export default Background;
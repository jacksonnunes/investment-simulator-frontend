import styled, { keyframes } from 'styled-components';

const appearBackground = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const growCard = keyframes`
  0% {
    transform: scale(0.2);
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
    opacity: 0.70;
  }
  85% {
    transform: scale(0.9);
    opacity: 0.85;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.95);

  animation: ${appearBackground} 0.2s ease-in;
`;

export const Content = styled.div`
  background-color: var(--background);
  width: 100%;
  max-width: 500px;
  padding: 24px;
  border-radius: 8px;

  animation: ${growCard} 0.2s ease-in 0.2s backwards;

  div {
    margin-bottom: 28px;

    strong {
      font-weight: 600;
    }
  }

  button {
    width: 100%;
    padding: 16px;
  }
`;
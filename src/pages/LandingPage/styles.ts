import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: scale(0.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideRightSmall = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.2);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const slideTop = keyframes`
from {
  opacity: 0;
  transform: translateY(100%);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const slideBottom = keyframes`
from {
  opacity: 0;
  transform: translateY(-100%);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  height: 100vh;

  img {
    animation: ${slideRight} 0.4s cubic-bezier(0, 0, 0.2, 1);
  }

  @media only screen and (max-width: 1024px) {
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;

      max-width: 95%;
      filter: opacity(25%);
      animation: ${slideRightSmall} 0.4s cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  max-width: 600px;
  height: 100vh;

  div {
    animation: ${slideBottom} 0.3s cubic-bezier(0, 0, 0.2, 1) 0.4s backwards;

    h1 {
      font-size: 3.65rem;
      font-weight: 700;
    }

    p {
      font-size: 1.675rem;
      font-weight: 500;
      color: var(--text-secondary);
    }
  }

  a {
    width: 95%;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    background-color: var(--primary);
    color: var(--text);

    padding: 1.75rem;
    border-radius: 8px;
    animation: ${slideTop} 0.3s cubic-bezier(0, 0, 0.2, 1) 0.7s backwards;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0 auto;
    align-items: center;
    width: 100%;

    a {
      width: 100%;
    }
  }
`;
import styled, { keyframes } from 'styled-components';

const slideTop = keyframes`
from {
  opacity: 0;
  transform: translateY(-50%);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  animation: ${slideTop} 0.8s cubic-bezier(0, 0, 0.2, 1);

  h3 {
    margin-bottom: 24px;
  }

  form {
    width: 95%;
    max-width: 550px;

    > span {
      display: block;
      margin: 8px 0;
    }

    section {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }

    > button {
      padding: 16px;
      width: 100%;
      margin-top: 12px;
    }
  }

  a {
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--primary);
    color: var(--text);
    font-size: 13.7px;
    font-weight: 500;

    width: calc(100% - 24px);
    max-width: 550px;
    margin: 12px 24px;
    padding: 16px;
    border-radius: 8px;
  }
`;
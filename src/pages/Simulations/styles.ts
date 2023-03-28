import styled from 'styled-components';

export const Container = styled.div`
  margin: 64px 24px;

  header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;
      color: var(--text);
      background-color: var(--secondary);
      width: 33px;
      height: 33px;
      margin-right: 8px;
      border-radius: 50%;

      font-size: 1.1rem;

      svg {
        margin-right: 2px;
      }
    }

    button {
      flex: 1;
      max-width: 250px;
      padding: 7px 16px;
      border: 2px solid var(--primary);
      background-color: transparent;
      color: var(--primary);
      border-radius: 4px;
    }
  }
`;

export const Content = styled.main`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(245px, 300px));
  justify-content: center;

  width: 100%;
  margin: 24px 0;
`;

export const Card = styled.div`
  background-color: var(--secondary);
  padding: 24px 16px;
  border-radius: 8px;

  strong {
    font-weight: 600;
  }

  div + div {
    margin-top: 12px;
  }
`;
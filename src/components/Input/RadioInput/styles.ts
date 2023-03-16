import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  
  > span {
    display: block;
    margin: 8px 0;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }

  p {
    color: var(--error);
    margin-bottom: 4px;
    font-size: 0.85rem;
  }
`;

export const Option = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 26px;
    height: 26px;
    margin-right: 8px;
    background-color: var(--secondary);
    border-radius: 50%;

    input {
      display: none;
    }

    div {
      visibility: hidden;
      width: 13px;
      height: 13px;
      background-color: var(--primary);
      border-radius: 50%;
    }

    input:checked + div {
      visibility: visible;
    }
  }

  & + div {
    margin-left: 30px;
  }

  span {
    font-size: 0.95rem;
    font-weight: 300;
  }
`;
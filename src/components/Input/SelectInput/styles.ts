import styled, { css } from 'styled-components';

interface Props {
  isFocused: boolean;
  isFilled?: boolean;
  hasErrors?: boolean;
}

export const Container = styled.div<Props>`
  position: relative;

  font-weight: 300;
  font-size: 13.5px;

  > div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 14px;
    background-color: var(--secondary);
    color: var(--text-secondary);
    border-radius: 6px;
    margin-top: 8px;

    border: 2px solid var(--secondary);

    transition: all 0.2s ease;

    span {
      flex: 1;
      padding: 0;
    }

    svg {
      transition: transform 0.2s ease;
    }
  }

  ${({ isFocused }) => isFocused && css`
    div {
      border: 2px solid var(--primary);

      svg {
        transform: rotate(180deg);
      }
    }
  `}

  ${({ isFilled }) => isFilled && css`
    div {
      color: var(--text);
      border-color: var(--primary);
    }
  `}

  ${({ hasErrors }) => hasErrors && css`
    div {
      border-color: var(--error);
    }
  `}
`;

export const ErrorContainer = styled.div`
  position: relative;
  margin-left: 8px;
  margin-top: 3px;

  svg {
    color: var(--error);
  }

  div {
    top: -250%;
  }
`;

export const Options = styled.section<Props>`
  position: absolute;
  z-index: 100;
  left: 0;
  bottom: -115px;

  display: flex;
  flex-direction: column;

  background-color: var(--secondary);
  border-radius: 6px;
  width: 100%;
  padding: 4px 8px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-100%);

  transition: all 0.2s ease;

  label {
    cursor: pointer;
    width: 100%;
    padding: 8px;

    transition: all 0.2s ease;

    input {
      display: none;
    }

    & + label {
      border-top: 1px solid #555;
    }

    &:hover {
      background-color: var(--background);
    }
  }

  ${({ isFocused }) => isFocused && css`
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  `}
`;
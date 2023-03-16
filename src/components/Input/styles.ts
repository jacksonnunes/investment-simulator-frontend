import styled, { css } from 'styled-components';

interface InputProps {
  isFilled: boolean;
  isFocused: boolean;
  hasErrors: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px;
  background-color: var(--secondary);
  border: 2px solid var(--secondary);
  border-radius: 6px;

  input {
    background-color: var(--secondary);
    width: 100%;
    border: none;

    ::placeholder {
      color: var(--text-secondary);
      opacity: 1;
    }

    ::-ms-input-placeholder {
      color: var(--text-secondary);
    }
  }

  > div {
    position: relative;
    
    svg {
      color: var(--error);
    }

    div {
      opacity: 0;
    }

    &:hover {
      div {
        opacity: 1;
      }
    }
  }

  & + div {
    margin-top: 8px;
  }

  ${({ isFocused, isFilled }) => (isFocused || isFilled) && css`
    border-color: var(--primary);
  `}

  ${({ hasErrors }) => hasErrors && css`
    border-color: var(--error);
  `}
`;
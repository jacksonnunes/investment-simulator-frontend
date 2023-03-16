import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -210%;
  right: -16px;

  min-width: 300px;
  padding: 6px;
  font-size: 0.8rem;
  font-weight: 400;
  background-color: var(--error);
  color: var(--text);
  border-radius: 4px;

  transition: all 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 15px 0 15px;
    border-color: var(--error) transparent transparent transparent;
  }
`;
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0%   { transform: scale(1,1) translateY(0); }
  10%  { transform: scale(1.1, 0.9) translateY(0); }
  30%  { transform: scale(0.9, 1.1) translateY(-50%); }
  50%  { transform: scale(1,1) translateY(0); }
  57%  { transform: scale(1,1) translateY(-3.5%); }
  64%  { transform: scale(1,1) translateY(0); }
  100% { transform: scale(1,1) translateY(0); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span:nth-child(2) {
    animation-delay: 0.3s;
  }

  span:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

export const Content = styled.span`
  display: block;
  width: 1.1rem;
  height: 1.1rem;
  background-color: var(--text);
  border-radius: 50%;

  animation: ${loadingAnimation} 1.8s ease infinite;

  & + span {
    margin-left: 8px;
  }
`;
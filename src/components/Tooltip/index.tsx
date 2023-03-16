import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  message: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ message }) => {
  return (
    <Container>
      { message }
    </Container>
  );
}
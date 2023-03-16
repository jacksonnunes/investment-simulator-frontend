import React from 'react';
import { Link } from 'react-router-dom';

import landingPage from '../../assets/landing-page.svg';

import { Container, Main } from './styles';

export const LandingPage: React.FC = () => {
  return (
    <Container>
      <Main>
        <div>
          <h1>Calculadora de Investimentos</h1>
          <p>Saiba onde investir seus recursos e obter o melhor retorno sobre o capital disponível</p>
        </div>
        <Link to="/main">Acessar Calculadora</Link>
      </Main>

      <img src={landingPage} alt="Avatar com gráficos" />
    </Container>
  );
}

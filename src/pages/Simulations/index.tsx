import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { useInvestment } from '../../hooks/investment';
import { currencyFormat } from '../../utils/currencyFormat';

import { Card, Container, Content } from './styles';

export const Simulations: React.FC = () => {
  const navigate = useNavigate();
  const { getSimulations, cleanSimulations } = useInvestment();

  const handleCleanSimulations = () => {
    cleanSimulations();
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <Link to="/main">
          <FiChevronLeft size={20} />
        </Link>

        <button type="button" onClick={handleCleanSimulations}>Limpar simulações</button>
      </header>
      <Content>

        {
          getSimulations().map(simulation => (
            <Card>
              <div>
                <p>
                  <strong>{simulation.modalidade}</strong>
                </p>
                <p>
                  <strong>{`Tempo de investimento: ${simulation.tempoInvestimento}`}</strong>
                </p>
                <p>
                  <strong>{`Rentabilidade: ${simulation.rentabilidade}`}</strong>
                </p>
              </div>

              <div>
                <p>{`Valor investido: ${currencyFormat(simulation.valorInvestido)}`}</p>
                <p>{`Rendimento bruto: ${currencyFormat(simulation.parametros.rentabilidadeBruta)}`}</p>
                <p>{`IR: ${currencyFormat(simulation.parametros.valorImpostoRenda)}`}</p>
                <p>{`IOF: ${currencyFormat(simulation.parametros.valorIof)}`}</p>
                <p>{`Rendimento líquido: ${currencyFormat(simulation.parametros.rentabilidadeLiquida)}`}</p>
                <p>{`Valor de resgate: ${currencyFormat(simulation.parametros.montante)}`}</p>
              </div>
            </Card>
          ))
        }

      </Content>
    </Container>
  )
}
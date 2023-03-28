import React from 'react';
import { Container, Content } from './styles';

import { useInvestment } from '../../hooks/investment';
import { currencyFormat } from '../../utils/currencyFormat';
import { InvestmentProps } from '../../types/investment';

export const Card: React.FC<InvestmentProps> = ({
  modalidade,
  rentabilidade,
  tempoInvestimento,
  valorInvestido,
  parametros,
}) => {
  const { removeInvestment } = useInvestment();

  return (
    <Container>
      <Content>
        <div>
          <p><strong>{ modalidade }</strong></p>
          <p><strong>{ `Tempo de investimento: ${tempoInvestimento}` }</strong></p>
          <p><strong>{ `Rentabilidade: ${rentabilidade}` }</strong></p>
        </div>

        <div>
          <p>{ `Valor investido: ${currencyFormat(valorInvestido)}` }</p>
          <p>{ `Rendimento bruto: ${currencyFormat(parametros.rentabilidadeBruta)}` }</p>
          <p>{ `IR: ${currencyFormat(parametros.valorImpostoRenda)}` }</p>
          <p>{ `IOF: ${currencyFormat(parametros.valorIof)}` }</p>
          <p>{ `Rendimento líquido: ${currencyFormat(parametros.rentabilidadeLiquida)}` }</p>
          <p>{ `Valor de resgate: ${currencyFormat(parametros.montante)}` }</p>
        </div>

        <button type="button" onClick={removeInvestment}>Nova simulação</button>
      </Content>
    </Container>
  )
}
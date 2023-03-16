import React from 'react';
import { Container, Content } from './styles';

import { useInvestment } from '../../hooks/investment';

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
          <p><strong>Tesouro Direto</strong></p>
          <p><strong>Tempo de investimento: 2 anos</strong></p>
          <p><strong>Rentabilidade: 100,00% do CDI</strong></p>
        </div>

        <div>
          <p>Valor investido: R$ 10.000,00</p>
          <p>Rendimento bruto: R$ 235,00</p>
          <p>IR: R$ 35,00</p>
          <p>IOF: R$ 0,00</p>
          <p>Rendimento líquido: R$ 200,00</p>
          <p>Valor de resgate: R$ 10.200,00</p>
        </div>

        <button type="button" onClick={removeInvestment}>Nova simulação</button>
      </Content>
    </Container>
  )
}
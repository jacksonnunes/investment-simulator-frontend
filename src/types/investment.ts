interface ParametersProps {
  rentabilidadeBruta: number;
  valorImpostoRenda: number;
  valorIof: number;
  rentabilidadeLiquida: number;
  montante: number;
}

export interface InvestmentProps {
  modalidade: string;
  rentabilidade: string;
  tempoInvestimento: string;
  valorInvestido: number;
  parametros: ParametersProps;
}
import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';
import { modalityOptions } from '../../utils/modalityOptions';
import { periodOptions } from '../../utils/periodOptions';
import { referenceTaxOptions } from '../../utils/referenceTaxOptions';
import { stringToNumberFormat } from '../../utils/stringToNumberFormat';

import { AppError } from '../../errors/app.error';

import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Loading } from '../../components/Loading';
import { SelectInput } from '../../components/Input/SelectInput';
import { RadioInput } from '../../components/Input/RadioInput';

import { useInvestment } from '../../hooks/investment';

import { InvestmentProps } from '../../types/investment';

import { Container } from './styles';

interface InvestmentFormData {
  modalidade: string;
  principal: number;
  tempo: number;
  periodicidade: number;
  taxaReferencia: string;
  percentualAtualizacao: number;
}

export const Main: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { investment, setNewInvestment, getSimulations } = useInvestment();

  const [taxaReferencia, setTaxaReferencia] = useState(formRef.current?.getFieldValue('taxaReferencia'));
  const [isLoading, setIsLoading] = useState(false);

  const percentualAtualizacaoLabel = {
    CDI: 'Porcentagem do CDI',
    IPCA: 'Porcentagem adicional',
    TAXA_FIXA: 'Porcentagem de atualização',
  }

  const handleTaxaReferenciaChange = useCallback(() => {
    setTaxaReferencia(formRef.current?.getFieldValue('taxaReferencia'));
    formRef.current?.setFieldValue('percentualAtualizacao', '');
  }, []);

  const handleSubmit = useCallback(async (data: InvestmentFormData) => {
    setIsLoading(true);
    try {
      formRef.current?.setErrors({});

      if (data.principal) {
        data.principal = stringToNumberFormat(data.principal);
      }
      if (data.percentualAtualizacao) {
        data.percentualAtualizacao = stringToNumberFormat(data.percentualAtualizacao);
      }
      if (data.tempo) {
        data.tempo = stringToNumberFormat(data.tempo);
      }
      if (data.periodicidade) {
        data.periodicidade = stringToNumberFormat(data.periodicidade);
      }
      
      const schema = Yup.object().shape({
        modalidade: Yup
          .mixed()
          .oneOf(['TESOURO_DIRETO', 'Tesouro Direto', 'CDB / RDB', 'LCI e LCA'], 'Escolha uma opção.')
          .required('Escolha uma opção.'),
        principal: Yup
          .number()
          .max(1000000000, 'Valor máximo: R$ 1.000.000.000,00')
          .positive('Preencha um número inteiro positivo.')
          .required('Preencha um número inteiro positivo.')
          .typeError('Preencha um número inteiro positivo.'),
        tempo: Yup
          .number()
          .max(360, 'Valor máximo: 360')
          .required('Preencha um número inteiro positivo.')
          .typeError('Preencha um número inteiro positivo.'),
        periodicidade: Yup
          .mixed()
          .oneOf([0, 1, 2], 'Escolha uma opção.')
          .required()
          .typeError('Escolha uma opção.'),
        taxaReferencia: Yup
          .mixed()
          .oneOf(['CDI', 'IPCA', 'TAXA_FIXA', 'Taxa fixa'], 'Escolha uma opção.')
          .required()
          .typeError('Escolha uma opção.'),
        percentualAtualizacao: Yup
          .number()
          .required('Preenchimento obrigatório')
          .typeError('Preencha um valor válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post<InvestmentProps>('/calculos/calcular', data);

      setNewInvestment(response.data);
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        const errors = getValidationErrors(e);
        formRef.current?.setErrors(errors);
      } else if (e instanceof AppError) {
        console.log(e);
      }
      setIsLoading(false);
    }
  }, []);

  return (
    <Container>
      <h3>Simulação</h3>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <RadioInput
          name="modalidade"
          label="Modalidade"
          options={modalityOptions}
        />

        <Input name="principal" label="Valor investido" mask="currency" />
        <Input name="tempo" label="Tempo de investimento" mask="number" />
        <SelectInput
          name="periodicidade"
          label="Período de investimento"
          options={periodOptions}
        />

        <RadioInput
          name="taxaReferencia"
          label="Taxa de atualização"
          options={referenceTaxOptions}
          onChange={handleTaxaReferenciaChange}
        />

        {
          !!taxaReferencia && (
            <Input
              name="percentualAtualizacao"
              label={percentualAtualizacaoLabel[taxaReferencia]}
              mask="percentage"
            />
          )
        }

        <button type="submit">
          {
            isLoading ? (
              <Loading />
            ) : (
              'Calcular'
            )
          }
        </button>
      </Form>

      {
        getSimulations().length >= 2 && (
          <Link to="/simulations">Comparar simulações</Link>
        )
      }

      {
        Object.keys(investment).length > 0 && (
          <Card {...investment} />
        )
      }
    </Container>
  );
}
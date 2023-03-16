import React, {
  createContext,
  useCallback,
  useContext,
  useState
} from 'react';

import { InvestmentProps } from '../types/investment';

interface Props {
  children: React.ReactNode;
}

interface InvestmentContextData {
  investment: InvestmentProps;
  setNewInvestment(investment: InvestmentProps): void;
  removeInvestment(): void;
  getSimulations(): InvestmentProps[];
}

const InvestmentContext = createContext<InvestmentContextData>({} as InvestmentContextData);

export const InvestmentProvider: React.FC<Props> = ({ children }) => {
  const storageKey = '@siminvest:investment';

  const [investment, setInvestment] = useState<InvestmentProps>({} as InvestmentProps);

  const setNewInvestment = useCallback((investment: InvestmentProps) => {
    setInvestment(investment);

    const storagedSimulations = sessionStorage.getItem(storageKey);
    if (storagedSimulations) {
      const simulations: InvestmentProps[] = JSON.parse(storagedSimulations);
      const stringfySimulations = JSON.stringify([ ...simulations, investment ]);
      sessionStorage.setItem(storageKey, stringfySimulations);
    } else {
      const simulations: InvestmentProps[] = [ investment ];
      const stringfySimulations = JSON.stringify(simulations);
      sessionStorage.setItem(storageKey, stringfySimulations);
    }
  }, []);

  const removeInvestment = useCallback(() => {
    setInvestment({} as InvestmentProps);
  }, []);

  const getSimulations = useCallback(() => {
    const storagedSimulations = sessionStorage.getItem(storageKey);

    if (storagedSimulations) {
      const simulations: InvestmentProps[] = JSON.parse(storagedSimulations);
      return simulations;
    } else {
      return [];
    }
  }, []);

  return (
    <InvestmentContext.Provider value={{
      investment,
      setNewInvestment,
      removeInvestment,
      getSimulations,
    }}>
      { children }
    </InvestmentContext.Provider>
  )
}

export function useInvestment(): InvestmentContextData {
  const context = useContext(InvestmentContext);

  if (!context) {
    throw new Error('useCart must be used within a InvestmentProvider');
  }

  return context;
}
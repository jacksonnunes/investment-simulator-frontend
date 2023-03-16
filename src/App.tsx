import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { InvestmentProvider } from './hooks/investment';

import { RoutesComponent } from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <InvestmentProvider>
        <Router>
          <RoutesComponent />
        </Router>
      </InvestmentProvider>

      <GlobalStyle />
    </>
  );
}

export default App;

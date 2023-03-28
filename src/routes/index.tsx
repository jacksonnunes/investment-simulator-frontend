import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LandingPage } from '../pages/LandingPage';
import { Main } from '../pages/Main';
import { Simulations } from '../pages/Simulations';

export const RoutesComponent: React.FC = () => (
  <Routes>
    <Route path='/' element={ <LandingPage /> } />
    <Route path='/main' element={ <Main /> } />
    <Route path='/simulations' element={ <Simulations /> } />
  </Routes>
)
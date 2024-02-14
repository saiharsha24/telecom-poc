// AppRoutes.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/home/Home';
import Plans from '../features/plans/Plans';
import Cart from '../features/cart/Cart';
import Unknown from './Unknown';
import Provisioning from '../features/Provisioning/Provisioning';
import Assurance from '../features/Assurance/Assurance';
import Coverage from '../features/Coverage/Coverage';
import Dashboard from '../features/Dashboard/Dashboard';
import CustomerDetails from '../features/CustomerDetails/CustomerDetails';
import ManagementRoutes from './ManagementRoutes';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/plans' element={<Plans />} />
      <Route path='/provisioning' element={<Provisioning />} />
      <Route path='/assurance' element={<Assurance />} />
      <Route path='/coverage' element={<Coverage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<Unknown />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/customer-details' element={<CustomerDetails />} />
      <Route path='/management/*' element={<ManagementRoutes />} />
    </Routes>
  );
};

export default AppRoutes;


// ManagementRoutes.tsx

import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import CustomerProfiles from '../features/management/Customerprofiles';
import SubscriptionHistory from '../features/management/subscriptions';
import ServiceOrders from '../features/management/serviceorders';
import Management from '../features/management/managment';
import Payments from '../features/management/payments';

const ManagementRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Management />}>
        <Route path='customerprofiles' element={<CustomerProfiles />} />
        <Route path='subscriptions' element={<SubscriptionHistory />} />
        <Route path='serviceorders' element={<ServiceOrders />} />
        <Route path='payments' element={<Payments />} />
        <Route index element={<Outlet />} />
      </Route>
    </Routes>
  );
};

export default ManagementRoutes;

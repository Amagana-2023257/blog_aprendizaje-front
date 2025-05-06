import React from 'react';
import { DashboardPage } from './pages/dashboard';

export const routes = [
  {
    path: '/*',
    element: <DashboardPage />,
  },
];

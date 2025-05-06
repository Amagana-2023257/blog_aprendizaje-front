import React from 'react';
import { Navbar } from '../../components/nav/Navbar';
import { Content } from '../../components/dashboard/Content';
import './Dashboard.css';

export const DashboardPage = () => {
  return (
    <div className="dashboard-wrapper d-flex">


      <div className="d-flex flex-column flex-grow-1">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <Content />
      </div>
    </div>
  );
};

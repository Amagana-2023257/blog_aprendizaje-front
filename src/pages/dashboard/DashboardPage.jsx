// src/pages/DashboardPage.jsx
import React, { useState } from 'react';
import { Navbar } from '../../components/nav/Navbar';
import { Content } from '../../components/dashboard/Content';
import './Dashboard.css';

export const DashboardPage = () => {
  const [courseFilter, setCourseFilter] = useState('');

  return (
    <div className="dashboard-wrapper d-flex">
      <div className="d-flex flex-column flex-grow-1">
        <Navbar />
        {/* Pasamos la función para cambiar el filtro */}
        <Content
          courseFilter={courseFilter}
          onSelectCourse={setCourseFilter}
        />
      </div>
    </div>
  );
};

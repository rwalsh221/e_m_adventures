import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import DashboardContent from '../../components/DashboardContent/DashboardContent';
import Footer from '../../components/Footer/Footer';

// import classes from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <DashboardContent />
      <Footer />
    </div>
  );
};

export default Dashboard;

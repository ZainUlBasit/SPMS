// dashboard.js

import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar/sidebar';
import styles from './page.module.css';

const Dashboard = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Sidebar />

      <div className={styles.content}>
        <h1>Welcome to the Dashboard</h1>
        {/* Add your additional dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;

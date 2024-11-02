// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { auth } = useAuth();

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Dashboard</h2>
        <p>Welcome, {auth.user?.username || auth.user?.email}!</p>
        {/* Add more dashboard content here */}
      </div>
    </>
  );
};

export default Dashboard;

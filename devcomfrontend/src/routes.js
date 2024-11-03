// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Community from './pages/Community';
import CreateCommunity from './pages/CreateCommunity';
import CommunityDetail from './pages/CommunityDetail'; // Import the new component
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth.token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/community"
        element={
          <PrivateRoute>
            <Community />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-community"
        element={
          <PrivateRoute>
            <CreateCommunity />
          </PrivateRoute>
        }
      />
      {/* Community Detail Route */}
      <Route
        path="/community/:id"
        element={
          <PrivateRoute>
            <CommunityDetail />
          </PrivateRoute>
        }
      />
      {/* Redirect any unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);

export default AppRoutes;

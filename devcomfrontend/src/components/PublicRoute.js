// src/components/PublicRoute.js
import React from 'react';
import { useAuth } from '../context/AuthContext.js';

import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth.token ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;

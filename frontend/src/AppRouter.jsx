import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Correct imports
import { authRoutes,feedRoutes } from "./Routes/index"; // Assuming these are your routes
import { useAuthContext } from "./Context/useAuthContext";

const AppRouter = () => {
  const { isAuthenticated } = useAuthContext();  // Use your auth context here if needed

  return (
    <Routes>
      {/* Map through your authRoutes */}
      {(authRoutes || []).map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}

      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<Navigate to="/home" replace />} />
      
      {(feedRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={isAuthenticated ? route.element : <Navigate to={{
      pathname: '/auth/sign-in',
      search: 'redirectTo=' + route.path
    }} />} />)}
    </Routes>
  );
};

export default AppRouter;

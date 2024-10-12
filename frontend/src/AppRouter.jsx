import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Correct imports
import { authRoutes } from "./Routes/index"; // Assuming these are your routes
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
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
};

export default AppRouter;

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { SessionContext } from './SessionContext';

const ProtectedRoute = ({ children }) => {
  const session = useContext(SessionContext);
  return session ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

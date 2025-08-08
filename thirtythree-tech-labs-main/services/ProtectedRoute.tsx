import React, { useEffect, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { verifyCheck } from './AuthVerify';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchAuth() {
      const res = await verifyCheck();
      console.log(res)
      if (res && res.status === 200) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    }

    fetchAuth();
  }, []);
  // Optional: You could return a loading screen while checking auth
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

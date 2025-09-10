import { useEffect, useState, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "./AuthServices";

interface ProtectRoute {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectRoute) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const user = await verifyToken();
      console.log(user);
      setIsAuthenticated(!!user);
      setIsAuthenticated(true);
      setLoading(false);
    }
    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

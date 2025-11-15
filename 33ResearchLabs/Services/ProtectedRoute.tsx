import { useEffect, useState, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "./AuthServices";

interface ProtectRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectRouteProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    async function checkAuth() {
      try {
        const user = await verifyToken();
        console.log("verifyToken result:", user);

        // ✅ Adjust logic depending on what verifyToken returns
        if (user && user.admin) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);
  console.log(isAuthenticated, "check Authenticity");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Checking authentication...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

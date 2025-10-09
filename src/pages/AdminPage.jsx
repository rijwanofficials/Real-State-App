import { useAuthContext } from "../context/useAuthContext";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const { isLoggedIn, checkAdmin } = useAuthContext();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      if (!isLoggedIn) {
        setIsAdmin(false);
      } else {
        const adminStatus = await checkAdmin();
        setIsAdmin(adminStatus);
      }
      setLoading(false);
    };
    verifyAdmin();
  }, [isLoggedIn, checkAdmin]);

  if (loading) return <p>Loading...</p>;
  if (!isLoggedIn) return <Navigate to="/login" />; // Redirect if not logged in
  if (!isAdmin) return <p className="text-red-600 text-center mt-10 font-semibold">Access Denied. You are not allowed to view this page.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, Admin! You can manage properties here.</p>
    </div>
  );
};

export { AdminPage };

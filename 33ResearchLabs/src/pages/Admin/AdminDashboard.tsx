import { useEffect, useState } from "react";
import { LogOut, BellDot } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { socket } from "@/App";
import { SubscriberModal } from "@/components/SubscriberModel";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState({
    name: "Admin",
    email: "admin@email.com",
  });
  const [showSubscriberModal, setShowSubscriberModal] = useState(false);

  const [stats, setStats] = useState({
    subscribers: 0,
    blogs: 0,
    queries: 0,
    consultations: 0,
  });

  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  const Navigate = useNavigate();

  async function fetched() {
    try {
      const response = await axios.get(
        `${BackendUrl}/api/admin/dashboard/stat`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        return setStats(response.data);
      } else {
        toast.error("Dashboard stat failed. Please try again.");
      }
    } catch (error) {
      toast.error("Dashboard stat failed. Please try again.");
      console.error("Error Dashboard stat:", error);
    }
  }

  useEffect(() => {
    fetched();

    const handleNewConsultation = () => {
      fetched();
      console.log("New consultation received:");
    };

    socket.on("new-userQuery", handleNewConsultation);
    socket.on("new-consultation", handleNewConsultation);
    socket.on("queryUpdate", handleNewConsultation);

    return () => {
      socket.off("new-userQuery", handleNewConsultation);
      socket.off("new-consultation", handleNewConsultation);
      socket.off("queryUpdate", handleNewConsultation);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/api/admin/logout`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("Logged out successfully!");
        Navigate("/login");
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500 text-sm">Welcome, {admin.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-800 hover:bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <button
            onClick={() => setShowSubscriberModal(true)}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition w-full text-left"
          >
            <h2 className="text-lg mb-1">Subscribers</h2>
            <p className="text-3xl font-bold text-blue-500">
              {stats.subscribers}
            </p>
          </button>

          <SubscriberModal
            isOpen={showSubscriberModal}
            onClose={() => setShowSubscriberModal(false)}
          />

          <Link
            to={"/admin/blog"}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg mb-1">Total Blog Posts</h2>
            <p className="text-3xl font-bold text-blue-500">{stats.blogs}</p>
          </Link>

          <Link
            to={"/admin/user-query"}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg mb-1">User Queries</h2>
            <p className="text-3xl font-bold text-blue-500">{stats.queries}</p>
          </Link>

          <Link
            to={"/admin/client-consultation"}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition relative"
          >
            <h2 className="text-lg mb-1 flex items-center justify-between">
              Client Consultations
              <BellDot className="text-green-500 animate-pulse" />
            </h2>
            <p className="text-3xl font-bold text-blue-500">
              {stats.consultations}
            </p>
          </Link>
        </div>

        {/* Additional dashboard content here */}
      </div>
    </div>
  );
};

export default AdminDashboard;

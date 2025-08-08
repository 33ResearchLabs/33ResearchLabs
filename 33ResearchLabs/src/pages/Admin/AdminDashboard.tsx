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
  // backend Url
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  // useNaviagttion hook
  const Navigate = useNavigate();
  // Simulated new data event
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
    // Cleanup on unmount
    return () => {
      socket.off("new-userQuery", handleNewConsultation);
      socket.off("new-consultation", handleNewConsultation);
      socket.off("queryUpdate", handleNewConsultation);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`/api/admin/logout`, {
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
    <div className="flex min-h-screen  text-white">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome, {admin.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-blue-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <button
            onClick={() => setShowSubscriberModal(true)}
            className="bg-gray-600 p-6 rounded-xl border border-[#334155] w-full text-left"
          >
            <h2 className="text-lg mb-1">Subscriber</h2>
            <p className="text-3xl font-bold text-orange-400">
              {stats.subscribers}
            </p>
          </button>
          <SubscriberModal
            isOpen={showSubscriberModal}
            onClose={() => setShowSubscriberModal(false)}
          />

          <Link
            to={"/admin/blog"}
            className="bg-gray-600 p-6 rounded-xl border border-[#334155]"
          >
            <h2 className="text-lg mb-1">Total Blog Posts</h2>
            <p className="text-3xl font-bold text-orange-400">{stats.blogs}</p>
          </Link>
          <Link
            to={"/admin/user-query"}
            className="bg-gray-600 p-6 rounded-xl border border-[#334155]"
          >
            <h2 className="text-lg mb-1">User Queries</h2>
            <p className="text-3xl font-bold text-orange-400">
              {stats.queries}
            </p>
          </Link>
          <Link
            to={"/admin/client-consultation"}
            className="bg-gray-600 p-6 rounded-xl border border-[#334155] relative"
          >
            <h2 className="text-lg mb-1 flex items-center justify-between">
              Client Consultations
              <BellDot className="text-green-400 animate-pulse" />
            </h2>
            <p className="text-3xl font-bold text-orange-400">
              {stats.consultations}
            </p>
          </Link>
        </div>

        {/* You can add more dashboard widgets below */}
      </div>
    </div>
  );
};

export default AdminDashboard;

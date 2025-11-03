import { useEffect, useState } from "react";
import {
  LogOut,
  BellDot,
  Users,
  FileText,
  Mail,
  TrendingUp,
  BarChart3,
  Calendar,
  Clock,
  Activity,
  Eye,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { socket } from "@/App";
import { SubscriberModal } from "@/components/SubscriberModel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-electric-50/20">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">
              Admin Dashboard
            </h1>
            <p className="text-neutral-600 mt-1">Welcome back, {admin.name}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-white hover:bg-red-50 border-red-200 text-red-600 hover:text-red-700"
          >
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card
            className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0"
            onClick={() => setShowSubscriberModal(true)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                Subscribers
                <Users className="h-5 w-5 text-white/80" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.subscribers}</div>
              <p className="text-xs text-blue-100 mt-1">Total subscribers</p>
            </CardContent>
          </Card>

          <SubscriberModal
            isOpen={showSubscriberModal}
            onClose={() => setShowSubscriberModal(false)}
          />

          <Link to="/admin/blog">
            <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-green-500 to-green-600 text-white border-0 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center justify-between">
                  Blog Posts
                  <FileText className="h-5 w-5 text-white/80" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.blogs}</div>
                <p className="text-xs text-green-100 mt-1">
                  Published articles
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/user-query">
            <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center justify-between">
                  User Queries
                  <Mail className="h-5 w-5 text-white/80" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.queries}</div>
                <p className="text-xs text-orange-100 mt-1">Pending queries</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/client-consultation">
            <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 h-full relative">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center justify-between">
                  Consultations
                  <div className="flex items-center space-x-1">
                    <BellDot className="h-4 w-4 text-yellow-300 animate-pulse" />
                    <Activity className="h-5 w-5 text-white/80" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.consultations}</div>
                <p className="text-xs text-purple-100 mt-1">
                  Active consultations
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-neutral-900">
                <BarChart3 className="h-5 w-5 text-[#1DA1F2]" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-neutral-700">
                      New blog post published
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-neutral-700">
                      5 new subscribers
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-neutral-700">
                      New client consultation
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500">6 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-neutral-900">
                <TrendingUp className="h-5 w-5 text-[#1DA1F2]" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/admin/newblog">
                  <Button className="w-full bg-[#1DA1F2] hover:bg-electric-700 text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    New Blog
                  </Button>
                </Link>
                <Link to="/admin/user-query">
                  <Button
                    variant="outline"
                    className="w-full border-neutral-300 hover:bg-neutral-50"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    View Queries
                  </Button>
                </Link>
                <Link to="/admin/client-consultation">
                  <Button
                    variant="outline"
                    className="w-full border-neutral-300 hover:bg-neutral-50"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Consultations
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full border-neutral-300 hover:bg-neutral-50"
                  onClick={() => window.location.reload()}
                >
                  <Activity className="h-4 w-4 mr-2" />
                  Refresh Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card className="border-neutral-200">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-neutral-900">
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-[#1DA1F2]" />
                <span>System Overview</span>
              </div>
              <Badge className="bg-green-100 text-green-800">
                All Systems Operational
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900 mb-1">
                  {new Date().toLocaleDateString()}
                </div>
                <p className="text-sm text-neutral-600">Last Updated</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  99.9%
                </div>
                <p className="text-sm text-neutral-600">Uptime</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {(
                    stats.subscribers +
                    stats.blogs +
                    stats.queries +
                    stats.consultations
                  ).toLocaleString()}
                </div>
                <p className="text-sm text-neutral-600">Total Records</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

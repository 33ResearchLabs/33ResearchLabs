import { socket } from "@/App";
import { AdminSidebar } from "@/components/AdminSidebar";

import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";
import { toast } from "sonner";

export const AdminLayout: React.FC = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Socket.IO as admin");
    });

    socket.on("new-userQuery", (data) => {
      console.log("New consultation received:", data);
      toast(`🆕 New Consultation: ${data.firstName} from ${data.email}`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="flex min-h-screen  text-gray-700">
      <AdminSidebar /> {/* Sidebar stays on the left */}
      <div className="flex-1 p-6">
        <Outlet /> {/* This will render AdminDashboard or BlogDashboard */}
      </div>
    </div>
  );
};

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
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

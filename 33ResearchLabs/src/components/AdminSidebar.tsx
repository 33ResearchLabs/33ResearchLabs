import { FileText, Home, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <aside className="w-64  border-r  p-6 border-gray-700">
      <h2 className="text-2xl font-bold mb-8 text-blue-400">33Research labs</h2>
      <nav className="space-y-4 text-gray-700">
        <Link
          to="/admin/dashboard"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <Home size={18} /> Dashboard
        </Link>
        <Link
          to="/admin/blog"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FileText size={18} /> Blog
        </Link>
        <Link
          to="/admin/user-query"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <Mail size={18} /> User Queries
        </Link>
        <Link
          to="/admin/client-consultation"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <Users size={18} /> Client Consultation
        </Link>
      </nav>
    </aside>
  );
};

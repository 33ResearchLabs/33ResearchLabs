import { FileText, Home, Mail, Users, BarChart3, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AdminSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      icon: Home,
      label: "Dashboard",
      path: "/admin/dashboard",
      badge: null
    },
    {
      icon: FileText,
      label: "Blog Management",
      path: "/admin/blog",
      badge: null
    },
    {
      icon: Mail,
      label: "User Queries",
      path: "/admin/user-query",
      badge: "New"
    },
    {
      icon: Users,
      label: "Consultations",
      path: "/admin/client-consultation",
      badge: "Live"
    }
  ];

  return (
    <aside className="w-72 bg-white border-r border-neutral-200 h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-electric-600 to-electric-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-neutral-900">
            33ResearchLabs
          </h2>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} to={item.path}>
                <div className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-electric-50 text-electric-700 border-l-4 border-electric-600'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}>
                  <div className="flex items-center space-x-3">
                    <Icon className={`h-5 w-5 ${
                      isActive(item.path) ? 'text-electric-600' : 'text-neutral-500'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge 
                      className={`text-xs ${
                        item.badge === 'Live' 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-neutral-200">
          <div className="bg-gradient-to-r from-electric-50 to-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-neutral-900 mb-2">Quick Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Today's Queries</span>
                <span className="font-medium text-neutral-900">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Active Sessions</span>
                <span className="font-medium text-green-600">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6">
        <Link to="/admin/profile">
          <Button 
            variant="outline" 
            className="w-full justify-start border-neutral-200 hover:bg-neutral-50"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </Link>
      </div>
    </aside>
  );
};

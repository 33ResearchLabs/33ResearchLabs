import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  Save,
  Eye,
  EyeOff,
  Shield,
  Settings,
  Bell,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface AdminData {
  id: string;
  name: string;
  email: string;
  role: string;
  lastLogin?: string;
  createdAt?: string;
}

const AdminProfile = () => {
  const [adminData, setAdminData] = useState<AdminData>({
    id: "admin-001",
    name: "Admin User",
    email: "admin@33researchlabs.com",
    role: "Super Admin",
  });

  const [emailForm, setEmailForm] = useState({
    currentEmail: "",
    newEmail: "",
    confirmEmail: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [loading, setLoading] = useState({
    email: false,
    password: false,
    profile: true,
  });

  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch admin profile data
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/api/admin/profile`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          setAdminData(response.data);
          setEmailForm((prev) => ({
            ...prev,
            currentEmail: response.data.email,
          }));
        }
      } catch (error) {
        console.error("Error fetching admin profile:", error);
        toast.error("Failed to load profile data");
      } finally {
        setLoading((prev) => ({ ...prev, profile: false }));
      }
    };

    fetchAdminData();
  }, [BackendUrl]);

  // Update email
  const handleEmailUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailForm.newEmail !== emailForm.confirmEmail) {
      toast.error("New email addresses do not match");
      return;
    }

    if (emailForm.newEmail === emailForm.currentEmail) {
      toast.error("New email must be different from current email");
      return;
    }

    setLoading((prev) => ({ ...prev, email: true }));

    try {
      const response = await axios.patch(
        `${BackendUrl}/api/admin/update-email`,
        {
          currentEmail: emailForm.currentEmail,
          newEmail: emailForm.newEmail,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Email updated successfully");
        setAdminData((prev) => ({ ...prev, email: emailForm.newEmail }));
        setEmailForm({
          currentEmail: emailForm.newEmail,
          newEmail: "",
          confirmEmail: "",
        });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to update email");
    } finally {
      setLoading((prev) => ({ ...prev, email: false }));
    }
  };

  // Update password
  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    setLoading((prev) => ({ ...prev, password: true }));

    try {
      const response = await axios.patch(
        `${BackendUrl}/api/admin/update-password`,
        {
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Password updated successfully");
        setPasswordForm({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Failed to update password"
      );
    } finally {
      setLoading((prev) => ({ ...prev, password: false }));
    }
  };

  if (loading.profile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-neutral-50 to-electric-50/20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-electric-50/20">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">
              Admin Profile
            </h2>
            <p className="text-neutral-600 mt-1">
              Manage your account settings and preferences
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Profile Overview */}
        <Card className="mb-6 border-neutral-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-neutral-900">
              <User className="h-5 w-5 text-[#1DA1F2]" />
              <span>Profile Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-[#1DA1F2] rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-neutral-900">
                  {adminData.name}
                </h3>
                <p className="text-neutral-600 mb-2">{adminData.email}</p>
                <Badge className="bg-electric-100 text-[#1DA1F2]">
                  <Shield className="h-3 w-3 mr-1" />
                  {adminData.role}
                </Badge>
              </div>
              <div className="text-right text-sm text-neutral-500">
                <p>Admin ID: {adminData.id}</p>
                {adminData.lastLogin && (
                  <p>
                    Last login:{" "}
                    {new Date(adminData.lastLogin).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Update Email */}
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-neutral-900">
                <Mail className="h-5 w-5 text-[#1DA1F2]" />
                <span>Update Email Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailUpdate} className="space-y-4">
                <div>
                  <Label htmlFor="currentEmail" className="text-neutral-700">
                    Current Email
                  </Label>
                  <Input
                    id="currentEmail"
                    type="email"
                    value={emailForm.currentEmail}
                    disabled
                    className="bg-neutral-50 border-neutral-300"
                  />
                </div>

                <Separator />

                <div>
                  <Label htmlFor="newEmail" className="text-neutral-700">
                    New Email Address
                  </Label>
                  <Input
                    id="newEmail"
                    type="email"
                    value={emailForm.newEmail}
                    onChange={(e) =>
                      setEmailForm((prev) => ({
                        ...prev,
                        newEmail: e.target.value,
                      }))
                    }
                    placeholder="Enter new email address"
                    required
                    className="border-neutral-300"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmEmail" className="text-neutral-700">
                    Confirm New Email
                  </Label>
                  <Input
                    id="confirmEmail"
                    type="email"
                    value={emailForm.confirmEmail}
                    onChange={(e) =>
                      setEmailForm((prev) => ({
                        ...prev,
                        confirmEmail: e.target.value,
                      }))
                    }
                    placeholder="Confirm new email address"
                    required
                    className="border-neutral-300"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={
                    loading.email ||
                    !emailForm.newEmail ||
                    !emailForm.confirmEmail
                  }
                  className="w-full bg-[#1DA1F2] hover:bg-electric-700 text-white"
                >
                  {loading.email ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Update Email
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Update Password */}
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-neutral-900">
                <Lock className="h-5 w-5 text-[#1DA1F2]" />
                <span>Update Password</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordUpdate} className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword" className="text-neutral-700">
                    Current Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showPasswords.current ? "text" : "password"}
                      value={passwordForm.currentPassword}
                      onChange={(e) =>
                        setPasswordForm((prev) => ({
                          ...prev,
                          currentPassword: e.target.value,
                        }))
                      }
                      placeholder="Enter current password"
                      required
                      className="border-neutral-300 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() =>
                        setShowPasswords((prev) => ({
                          ...prev,
                          current: !prev.current,
                        }))
                      }
                    >
                      {showPasswords.current ? (
                        <EyeOff className="h-4 w-4 text-neutral-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-neutral-500" />
                      )}
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label htmlFor="newPassword" className="text-neutral-700">
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showPasswords.new ? "text" : "password"}
                      value={passwordForm.newPassword}
                      onChange={(e) =>
                        setPasswordForm((prev) => ({
                          ...prev,
                          newPassword: e.target.value,
                        }))
                      }
                      placeholder="Enter new password"
                      required
                      className="border-neutral-300 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() =>
                        setShowPasswords((prev) => ({
                          ...prev,
                          new: !prev.new,
                        }))
                      }
                    >
                      {showPasswords.new ? (
                        <EyeOff className="h-4 w-4 text-neutral-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-neutral-500" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Password must be at least 8 characters long
                  </p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-neutral-700">
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showPasswords.confirm ? "text" : "password"}
                      value={passwordForm.confirmPassword}
                      onChange={(e) =>
                        setPasswordForm((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                      placeholder="Confirm new password"
                      required
                      className="border-neutral-300 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() =>
                        setShowPasswords((prev) => ({
                          ...prev,
                          confirm: !prev.confirm,
                        }))
                      }
                    >
                      {showPasswords.confirm ? (
                        <EyeOff className="h-4 w-4 text-neutral-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-neutral-500" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={
                    loading.password ||
                    !passwordForm.currentPassword ||
                    !passwordForm.newPassword ||
                    !passwordForm.confirmPassword
                  }
                  className="w-full bg-[#1DA1F2] hover:bg-electric-700 text-white"
                >
                  {loading.password ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Security Information */}
        <Card className="mt-6 border-neutral-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-neutral-900">
              <Shield className="h-5 w-5 text-[#1DA1F2]" />
              <span>Security Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-neutral-700">
                    Two-factor authentication enabled
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-neutral-700">
                    Strong password policy enforced
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-neutral-700">
                    Session timeout configured
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-neutral-700">
                    Login notifications enabled
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-blue-600" />
                  <span className="text-neutral-700">
                    Security alerts configured
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-[#1DA1F2]" />
                  <span className="text-neutral-700">
                    Admin privileges active
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminProfile;

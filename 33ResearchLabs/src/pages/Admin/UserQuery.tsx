import { useEffect, useState } from "react";
import {
  Mail,
  User,
  Clock,
  DollarSign,
  Phone,
  MessageSquare,
  Calendar,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  X,
} from "lucide-react";
import axios from "axios";
import { socket } from "@/App";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface UserQuery {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  projectDescription: string;
  budget: number;
  projectType: string;
  status: "pending" | "solved" | "rejected";
  createdAt?: string;
  updatedAt?: string;
  phone?: string;
  subject?: string;
}

const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const UserQueries = () => {
  const [queries, setQueries] = useState<UserQuery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<UserQuery | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [filteredQueries, setFilteredQueries] = useState<UserQuery[]>([]);
  const fetchQueries = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/api/users/user-queries`, {
        withCredentials: true,
      });
      setQueries(res.data);
    } catch (error) {
      console.error("Error fetching queries", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();

    const handleNewConsultation = () => {
      fetchQueries();
      console.log("New consultation received:");
    };

    socket.on("new-userQuery", handleNewConsultation);
    socket.on("queryUpdate", handleNewConsultation);
    // Cleanup on unmount
    return () => {
      socket.off("new-userQuery", handleNewConsultation);
    };
  }, []);

  // Filter queries based on search and status
  useEffect(() => {
    let filtered = queries;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (query) =>
          query.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          query.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          query.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          query.projectDescription
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((query) => query.status === statusFilter);
    }

    setFilteredQueries(filtered);
  }, [queries, searchTerm, statusFilter]);

  const updateStatus = async (id: string, status: "solved" | "rejected") => {
    try {
      await axios.patch(`${BackendUrl}/api/users/user-queries/${id}`, {
        status,
      });

      setQueries((prev) =>
        prev.map((query) => (query._id === id ? { ...query, status } : query))
      );

      if (selectedUser && selectedUser._id === id) {
        setSelectedUser({ ...selectedUser, status });
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const openModal = (user: UserQuery) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "solved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "solved":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-neutral-50 to-electric-50/20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading queries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-electric-50/20">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">
              User Queries
            </h2>
            <p className="text-neutral-600 mt-1">
              Manage customer inquiries and support requests
            </p>
          </div>
          <Badge className="bg-electric-100 text-electric-800">
            {queries.length} Total Queries
          </Badge>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {queries.length}
                  </p>
                  <p className="text-sm text-neutral-600">Total Queries</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {queries.filter((q) => q.status === "pending").length}
                  </p>
                  <p className="text-sm text-neutral-600">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {queries.filter((q) => q.status === "solved").length}
                  </p>
                  <p className="text-sm text-neutral-600">Solved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {queries.filter((q) => q.status === "rejected").length}
                  </p>
                  <p className="text-sm text-neutral-600">Rejected</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6 border-neutral-200">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    placeholder="Search queries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-neutral-300"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px] border-neutral-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="solved">Solved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="border-neutral-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-electric-600" />
              <span>Query Management</span>
              <Badge className="ml-auto bg-neutral-100 text-neutral-800">
                {filteredQueries.length} queries
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredQueries.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                <p className="text-neutral-500 text-lg">
                  {searchTerm || statusFilter !== "all"
                    ? "No queries match your filters"
                    : "No queries found"}
                </p>
                <p className="text-neutral-400 text-sm">
                  Customer queries will appear here
                </p>
              </div>
            ) : (
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-neutral-200">
                      <TableHead className="font-semibold text-neutral-900">
                        Customer
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Contact
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Project
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Budget
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Status
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredQueries.map((query) => (
                      <TableRow
                        key={query._id}
                        className="border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer"
                        onClick={() => openModal(query)}
                      >
                        <TableCell className="py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-electric-100 rounded-full flex items-center justify-center">
                              <User className="h-4 w-4 text-electric-600" />
                            </div>
                            <div>
                              <div className="font-medium text-neutral-900">
                                {query.firstName} {query.lastName}
                              </div>
                              <div className="text-sm text-neutral-500">
                                Customer
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2 text-sm text-neutral-600">
                              <Mail className="h-3 w-3" />
                              <span>{query.email}</span>
                            </div>
                            {query.phone && (
                              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                                <Phone className="h-3 w-3" />
                                <span>{query.phone}</span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <div className="max-w-xs">
                            <div className="font-medium text-neutral-900 text-sm">
                              {query.projectType}
                            </div>
                            <div className="text-sm text-neutral-500 line-clamp-2">
                              {query.projectDescription}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <div className="flex items-center space-x-1 text-neutral-900 font-medium">
                            <DollarSign className="h-4 w-4 text-green-600" />
                            <span>
                              {query.budget?.toLocaleString() || "N/A"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <Badge
                            className={`${getStatusColor(query.status)} border`}
                          >
                            <div className="flex items-center space-x-1">
                              {getStatusIcon(query.status)}
                              <span className="capitalize">{query.status}</span>
                            </div>
                          </Badge>
                        </TableCell>
                        <TableCell className="py-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                openModal(query);
                              }}
                              className="border-neutral-300 hover:bg-neutral-100"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(query._id, "solved");
                              }}
                              className="border-green-300 text-green-600 hover:bg-green-50"
                              disabled={query.status === "solved"}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(query._id, "rejected");
                              }}
                              className="border-red-300 text-red-600 hover:bg-red-50"
                              disabled={query.status === "rejected"}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Modern Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-electric-600 to-electric-500 text-white p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3 pr-12">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    {selectedUser.firstName} {selectedUser.lastName}
                  </h3>
                  <p className="text-electric-100">Customer Query Details</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[60vh] p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Information */}
                <Card className="border-neutral-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-neutral-900">
                      <User className="h-5 w-5 text-electric-600" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Full Name
                      </label>
                      <div className="bg-neutral-50 px-3 py-2 rounded-lg text-neutral-900">
                        {selectedUser.firstName} {selectedUser.lastName}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <div className="bg-neutral-50 px-3 py-2 rounded-lg text-neutral-900 flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-neutral-500" />
                        <span>{selectedUser.email}</span>
                      </div>
                    </div>
                    {selectedUser.phone && (
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number
                        </label>
                        <div className="bg-neutral-50 px-3 py-2 rounded-lg text-neutral-900 flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-neutral-500" />
                          <span>{selectedUser.phone}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Project Details */}
                <Card className="border-neutral-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-neutral-900">
                      <MessageSquare className="h-5 w-5 text-electric-600" />
                      <span>Project Details</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedUser.projectType && (
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Project Type
                        </label>
                        <div className="bg-neutral-50 px-3 py-2 rounded-lg text-neutral-900">
                          {selectedUser.projectType}
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Budget Range
                      </label>
                      <div className="bg-neutral-50 px-3 py-2 rounded-lg text-neutral-900 flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span>
                          {selectedUser.budget?.toLocaleString() ||
                            "Not specified"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Current Status
                      </label>
                      <Badge
                        className={`${getStatusColor(
                          selectedUser.status
                        )} border w-fit`}
                      >
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(selectedUser.status)}
                          <span className="capitalize">
                            {selectedUser.status}
                          </span>
                        </div>
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project Description */}
              <Card className="mt-6 border-neutral-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-neutral-900">
                    <MessageSquare className="h-5 w-5 text-electric-600" />
                    <span>Project Description</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-700 leading-relaxed">
                      {selectedUser.projectDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Timestamps */}
              <Card className="mt-6 border-neutral-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-neutral-900">
                    <Clock className="h-5 w-5 text-electric-600" />
                    <span>Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Query Submitted
                      </label>
                      <div className="bg-neutral-50 px-3 py-2 rounded-lg text-neutral-900 flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-neutral-500" />
                        <span>{formatDate(selectedUser.createdAt)}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Last Updated
                      </label>
                      <div className="bg-neutral-50 px-3 py-2 rounded-lg text-neutral-900 flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-neutral-500" />
                        <span>{formatDate(selectedUser.updatedAt)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4">
              <div className="flex items-center justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={closeModal}
                  className="border-neutral-300 hover:bg-neutral-100"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    updateStatus(selectedUser._id, "solved");
                    closeModal();
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white"
                  disabled={selectedUser.status === "solved"}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark as Solved
                </Button>
                <Button
                  onClick={() => {
                    updateStatus(selectedUser._id, "rejected");
                    closeModal();
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white"
                  disabled={selectedUser.status === "rejected"}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Mark as Rejected
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserQueries;

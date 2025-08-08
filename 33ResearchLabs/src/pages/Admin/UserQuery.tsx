import { useEffect, useState } from "react";
import axios from "axios";
import { socket } from "@/App";

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-gray-700">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className=" text-gray-800 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">User Queries</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Message
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Project Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Budget
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y ">
            {queries.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-400 text-sm"
                >
                  No user queries found.
                </td>
              </tr>
            ) : (
              queries.map((query) => (
                <tr
                  key={query._id}
                  className="hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                  onClick={() => openModal(query)}
                >
                  <td className="px-6 py-4">
                    {query.firstName} {query.lastName}
                  </td>
                  <td className="px-6 py-4">{query.email}</td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs truncate text-gray-600 text-wrap">
                      {query.projectDescription}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs truncate text-gray-600">
                      {query.projectType}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs truncate text-gray-600">
                      {query.budget}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        query.status === "solved"
                          ? "bg-green-600 text-white"
                          : query.status === "rejected"
                          ? "bg-red-600 text-white"
                          : "bg-yellow-400 text-black"
                      }`}
                    >
                      {query.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex flex-col gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStatus(query._id, "solved");
                      }}
                      className="w-23 bg-green-600 hover:bg-green-700 text-white text-sm px-1 py-1 rounded"
                    >
                      Solved
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStatus(query._id, "rejected");
                      }}
                      className="w-25 bg-red-600 hover:bg-red-700 text-white text-sm px-1 py-1 rounded"
                    >
                      Rejected
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 no-scrollbar">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">User Details</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400">
                      First Name
                    </label>
                    <p className="text-white bg-gray-800 px-3 py-2 rounded">
                      {selectedUser.firstName}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400">
                      Last Name
                    </label>
                    <p className="text-white bg-gray-800 px-3 py-2 rounded">
                      {selectedUser.lastName}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400">Email</label>
                    <p className="text-white bg-gray-800 px-3 py-2 rounded">
                      {selectedUser.email}
                    </p>
                  </div>
                  {selectedUser.phone && (
                    <div className="md:col-span-2">
                      <label className="block text-sm text-gray-400">
                        Phone
                      </label>
                      <p className="text-white bg-gray-800 px-3 py-2 rounded">
                        {selectedUser.phone}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Query Details
                </h4>
                <div className="space-y-4">
                  {selectedUser.projectType && (
                    <div>
                      <label className="block text-sm text-gray-400">
                        projectType
                      </label>
                      <p className="text-white bg-gray-800 px-3 py-2 rounded">
                        {selectedUser.projectType}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-2">
                  {selectedUser.projectDescription && (
                    <div>
                      <label className="block text-sm text-gray-400">
                        projectDescription
                      </label>
                      <p className="text-white bg-gray-800 px-3 py-2 rounded">
                        {selectedUser.projectDescription}
                      </p>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  {selectedUser.subject && (
                    <div>
                      <label className="block text-sm text-gray-400">
                        Subject
                      </label>
                      <p className="text-white bg-gray-800 px-3 py-2 rounded">
                        {selectedUser.subject}
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm text-gray-400">
                      Status
                    </label>
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        selectedUser.status === "solved"
                          ? "bg-green-600 text-white"
                          : selectedUser.status === "rejected"
                          ? "bg-red-600 text-white"
                          : "bg-yellow-400 text-black"
                      }`}
                    >
                      {selectedUser.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Timestamps
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400">
                      Created At
                    </label>
                    <p className="text-white bg-gray-800 px-3 py-2 rounded">
                      {formatDate(selectedUser.createdAt)}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400">
                      Updated At
                    </label>
                    <p className="text-white bg-gray-800 px-3 py-2 rounded">
                      {formatDate(selectedUser.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-2 p-6 border-t border-gray-700">
              <button
                onClick={() => updateStatus(selectedUser._id, "solved")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Mark as Solved
              </button>
              <button
                onClick={() => updateStatus(selectedUser._id, "rejected")}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Mark as Rejected
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserQueries;

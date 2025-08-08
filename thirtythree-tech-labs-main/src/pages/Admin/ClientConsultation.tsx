import { useEffect, useState } from "react";
import axios from "axios";
import { socket } from "@/App";

interface UserQuery {
  _id: string;
  name: string;
  email: string;
  description: string;
  status: "pending" | "solved" | "dismissed";
}

export const ClientConsultation = () => {
  const [consultation, setConsultation] = useState<UserQuery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchConsultation = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/dashboard/consultation`,
        {
          withCredentials: true,
        }
      );
      setConsultation(res.data);
    } catch (error) {
      console.error("Error fetching consultation", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchConsultation();
    socket.on("new-consultation", fetchConsultation);
    socket.on("queryUpdate", fetchConsultation);
    return () => {
      socket.off("new-consultation", fetchConsultation);
      socket.off("queryUpdate", fetchConsultation);
    };
  }, []);

  const updateStatus = async (
    id: string,
    status: "solved" | "dismissed"
  ): Promise<void> => {
    try {
      await axios.patch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/admin/dashboard/consultation${id}`,
        { status },
        { withCredentials: true }
      );

      setConsultation((prev) =>
        prev.map((query) => (query._id === id ? { ...query, status } : query))
      );
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0e0e10] text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Client Consultation</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
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
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-gray-300">
            {consultation.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-400 text-sm"
                >
                  No user consultation found.
                </td>
              </tr>
            ) : (
              consultation.map((query) => (
                <tr
                  key={query._id}
                  className="hover:bg-blue-500 hover:text-white text-gray-700 transition cursor-pointer"
                >
                  <td className="px-6 py-4">{query.name}</td>
                  <td className="px-6 py-4">{query.email}</td>
                  <td className="px-6 py-4">{query.description}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        query.status === "solved"
                          ? "bg-green-600 text-white"
                          : query.status === "dismissed"
                          ? "bg-red-600 text-white"
                          : "bg-yellow-400 text-black"
                      }`}
                    >
                      {query.status.charAt(0).toUpperCase() +
                        query.status.slice(1)}
                    </span>
                  </td>
                  <td className="flex flex-col px-2 space-y-2 py-4">
                    <button
                      onClick={() => updateStatus(query._id, "solved")}
                      className="w-23 bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded"
                    >
                      Solved
                    </button>
                    <button
                      onClick={() => updateStatus(query._id, "dismissed")}
                      className="w-23 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                    >
                      Dismissed
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

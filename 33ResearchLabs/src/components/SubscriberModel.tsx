import { Dialog } from "@headlessui/react"; // Or use your own modal library
import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const SubscriberModal = ({ isOpen, onClose }) => {
  const [subscribers, setSubscribers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (isOpen) {
      fetchSubscribers(currentPage); // <- this fetches on open and on page change
    }
  }, [isOpen, currentPage]); // <- watching both `isOpen` and `currentPage`

  const fetchSubscribers = async (page) => {
    try {
      const res = await axios.get(
        `${BackendUrl}/api/admin/dashboard/subscribers?page=${page}&limit=10`,
        { withCredentials: true }
      );
      setSubscribers(res.data.subscribers || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      toast.error("Failed to fetch subscribers");
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0">
      <div className="bg-black bg-opacity-60 fixed inset-0" />
      <div className="flex items-center justify-center h-full">
        <div className="bg-gray-800 text-white p-6 rounded-lg max-w-xl w-full relative z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Subscribers</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {Array.isArray(subscribers) && subscribers.length > 0 ? (
              subscribers.map((subscriber, i) => (
                <div
                  key={subscriber._id || i}
                  className="bg-gray-700 px-4 py-2 rounded-md"
                >
                  <p className="font-medium">{subscriber.email}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(subscriber.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-gray-400">
                No subscribers found.
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <button
              className="text-sm bg-gray-600 px-3 py-1 rounded disabled:opacity-50"
              onClick={goToPrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="text-sm bg-gray-600 px-3 py-1 rounded disabled:opacity-50"
              onClick={goToNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

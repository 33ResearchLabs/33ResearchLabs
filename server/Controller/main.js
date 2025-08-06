import Blog from "../models/Blog.js";
import Consultation from "../models/userConsultation.js";
import Subscriber from "../models/UserSubscribe.js";
import UserQuery from "../models/userQuery.js";


// Controller function
export const GetAllStates = async (req, res) => {
  try {
    const [blogCount, subscriberCount, queryCount, consultationCount] =
      await Promise.all([
        Blog.countDocuments(),
        Subscriber.countDocuments(),
        UserQuery.countDocuments({ status: "pending" }),
        Consultation.countDocuments({ status: "pending" }), // ✅ Filter added
      ]);

    res.status(200).json({
      blogs: blogCount,
      subscribers: subscriberCount,
      queries: queryCount,
      consultations: consultationCount,
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ message: "Failed to get counts" });
  }
};

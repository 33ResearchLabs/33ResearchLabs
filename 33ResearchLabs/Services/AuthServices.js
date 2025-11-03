import axios from "axios";

export async function verifyToken() {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/admin/verify`,
      { withCredentials: true } // ✅ Send cookies
    );
    console.log(res, "dtaat come from backend ");
    return res.data;
  } catch (err) {
    console.error("Token verification failed", err);
    return null;
  }
}

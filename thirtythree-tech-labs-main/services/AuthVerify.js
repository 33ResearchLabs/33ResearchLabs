import axios from "axios"
// AuthVerify.ts
export const verifyCheck = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/verify`, {
            withCredentials: true
        });
        return res;  // return full response
    } catch (error) {
        console.log("request failed", error);
        return null;
    }
};

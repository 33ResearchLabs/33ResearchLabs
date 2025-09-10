// src/pages/Login.tsx
import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  const Navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await axios.post(
        `${BackendUrl}/api/admin/login`,
        formData,
        {
          withCredentials: true,
        }
      );
      setSuccessMsg("Login successful!");
      Navigate("/admin/dashboard");
      // You can redirect or save token here
      console.log(response.data);
    } catch (error: any) {
      setErrorMsg(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-2xl shadow-xl border border-[#334155]">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Welcome Back
        </h2>
        <p className="text-muted-foreground text-sm text-center mb-6">
          Login to your ReputationOne AI account
        </p>

        {errorMsg && (
          <div className="text-red-500 text-sm text-center mb-4">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="text-green-500 text-sm text-center mb-4">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm text-black block mb-1">Email</label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-2.5 text-muted-foreground"
                size={20}
              />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 p-2 bg-[#0f172a] text-white border border-[#334155] placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-black block mb-1">Password</label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-2.5 text-muted-foreground"
                size={20}
              />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 p-2 bg-[#0f172a] text-white border border-[#334155] placeholder:text-gray-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Don’t have an account?{" "}
            <a href="/signup" className="text-orange-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

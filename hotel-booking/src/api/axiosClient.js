// src/api/axiosClient.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Request interceptor (attach token if available)
axiosClient.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("auth_token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (e) {
      // ignore
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (unified error shape)
axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    // Optionally normalize error object
    if (error.response) {
      const normalized = {
        status: error.response.status,
        data: error.response.data,
        message:
          (error.response.data && error.response.data.message) ||
          error.response.statusText ||
          "Server error",
      };
      return Promise.reject(normalized);
    }
    return Promise.reject({ status: 0, message: error.message || "Network error" });
  }
);

export default axiosClient;

import axios from "axios";
import toast from "react-hot-toast";

// The only axios instance. Lead forms post to /api/lead on this Next server.
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || undefined,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  timeout: 15000,
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response?.status;
    if (status === 429) toast.error("Too many requests. Please wait a minute, or call us.");
    else if (!status || status >= 500) toast.error("We couldn't send that. Please call (773) 987-1693.");
    return Promise.reject(error);
  },
);

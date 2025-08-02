import axios from "axios";

const baseUrls = {
  "development": "http://backend:8080",
  "production": "/api"
}

console.log(process.env.NODE_ENV, baseUrls[process.env.NODE_ENV]);

// axios instance for making requests
const axiosInstance = axios.create({
  baseURL: baseUrls[process.env.NODE_ENV]
});

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  config.headers["Authorization"] = localStorage.getItem("token");
  return config;
});

export default axiosInstance;

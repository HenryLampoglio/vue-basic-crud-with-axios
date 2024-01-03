import axios from "axios";
import.meta.env.VITE_SERVER_NAME;

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default apiClient;

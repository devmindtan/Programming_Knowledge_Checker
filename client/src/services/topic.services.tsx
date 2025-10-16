import axios from "axios";

// URL base backend
const API_BASE = "http://localhost:8080";

export const getAllTopicsApi = async () => {
  try {
    const res = await axios.get(`${API_BASE}/api/get-all-topics`);
    return res.data;
  } catch (err) {
    console.error("Error fetching topics:", err);
    throw err;
  }
};

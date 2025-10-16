import axios from "axios";

// URL base backend
const API_BASE = "http://localhost:8080";

export const getAllDsasApi = async () => {
  try {
    const res = await axios.get(`${API_BASE}/api/get-all-dsas`);
    return res.data;
  } catch (err) {
    console.error("Error fetching topics:", err);
    throw err;
  }
};

import axios from "axios";

// URL base backend
const API_BASE = "http://localhost:8080";

export const getAllProficienyLevelsApi = async () => {
  try {
    const res = await axios.get(`${API_BASE}/api/get-all-proficiency-levels`);
    return res.data;
  } catch (err) {
    console.error("Error fetching topics:", err);
    throw err;
  }
};

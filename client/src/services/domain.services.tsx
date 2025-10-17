import axios from "axios";

// URL base backend
const API_BASE = import.meta.env.VITE_API_BASE;

export const getAllDomainsApi = async () => {
  try {
    const res = await axios.get(`${API_BASE}/api/get-all-domains`);
    return res.data;
  } catch (err) {
    console.error("Error fetching topics:", err);
    throw err;
  }
};

export const getDomainByIdApi = async (id: number) => {
  try {
    const res = await axios.get(`${API_BASE}/api/get-domain/${id}`);
    return res.data["name"];
  } catch (err) {
    console.error("Error fetching topics:", err);
    throw err;
  }
};

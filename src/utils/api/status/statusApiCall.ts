import axios from "axios";
const apiUrl = import.meta.env.VITE_BACKEND_URL;



export async function getStatuses() {
    try {
      const response = await axios.get(`${apiUrl}/api/Status/countStatus/5`);
      return response.data;
    } catch (error) {
      console.error("Error fetching statuses:", error);
      return []; // Return an empty array in case of error
    }
  }
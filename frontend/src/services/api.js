import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.BACKEND_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const analyzeTranscript = async (transcript) => {
  const response = await API.post("/analyse", {
    transcript,
  });

  return response.data;
};
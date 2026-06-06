import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const analyzeTranscript = async (
  transcript
) => {
  const response = await API.post(
    "/analyse",
    {
      transcript,
    }
  );

  return response.data;
};
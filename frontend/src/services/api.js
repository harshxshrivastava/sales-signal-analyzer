import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVICE_URL,
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


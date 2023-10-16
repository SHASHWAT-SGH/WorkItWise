import axios from "axios";

export const API_URL = "http://192.168.188.156:8000";

export const axiosInstance = axios.create({
  baseURL: API_URL, // Replace with your API base URL
});

export const setAxiosAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // If there is no token, remove the Authorization header
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

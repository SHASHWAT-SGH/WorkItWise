import axios from "axios";

export const axiosInstance = axios.create();

export const setAxiosAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // If there is no token, remove the Authorization header
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

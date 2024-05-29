import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.myhives.io",
  timeout: 3000,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const response = error?.response;
    const statusCode = response?.status;

    if (statusCode === 403) {
      window.localStorage.clear();
      window.location.href = "/testing";
    }
  }
);

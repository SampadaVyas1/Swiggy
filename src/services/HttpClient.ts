import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/", //TODO: Need to add a Base URL
  timeout: 9000 * 10,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const idToken = localStorage.getItem("idToken");
  config.headers.Authorization = idToken ? `Bearer ${idToken}` : "";
  return config;
});

axiosClient.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => Promise.reject(error)
);

export default axiosClient;

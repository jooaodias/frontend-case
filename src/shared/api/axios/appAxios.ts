import axios from "axios";

const appAxios = axios.create({
  baseURL: import.meta.env.VITE_API,
});

appAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default appAxios;

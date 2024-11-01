import axios from "axios";

const appAxios = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default appAxios;

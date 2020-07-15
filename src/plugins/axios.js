import axios from "axios";
import { baseURL } from "@/config.js";

axios.defaults.baseURL = baseURL;

if (localStorage.getItem("auth")) {
  axios.defaults.headers.common.auth = localStorage.auth;
}

axios.interceptors.response.use(
  (res) => {
    return { data: res.data.data, message: res.data.userMessage };
  },
  (err) => {
    if (err.response) {
      console.error(err.response.data.developerMessage);
      if (err.response.status === 500) {
        console.error("SOMETHING HAPPENED IN BACKEND!");
      } else if (err.response.status === 400) {
        console.log("BAD REQUEST!");
      } else if (err.response.status === 401) {
        console.log("UNAUTHORIZED!");
      }
      return Promise.reject(err.response.data.userMessage);
    } else return Promise.reject(err);
  }
);

export default axios;

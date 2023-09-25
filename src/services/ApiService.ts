/* eslint-disable no-undef */
import axios, { AxiosRequestHeaders } from "axios";
import TokenService from "./TokenService";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers = {
        Authorization: "bearer " + token,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response.status === 401) {
      window.location.href = "/error";
    }
    // const originalConfig = err.config;
    // if (originalConfig.url !== "/auth/signin" && err.response) {
    //   // Access Token was expired
    //   if (err.response.status === 401) {
    //     localStorage.removeItem("LoggedInUser");
    //     window.location.href = "/login";
    //     // window.location =
    //     //   window.location.protocol + "//" + window.location.host + "/login";
    //   }
    // }
    return Promise.reject(err);
  }
);
export default instance;

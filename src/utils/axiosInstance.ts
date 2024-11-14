import axios, { AxiosRequestConfig } from "axios";

import { accessTokenStorage, refreshTokenStorage } from "./storage";

const initInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessTokenStorage.get()}`,
      "Content-Type": "application/json",
      ...config.headers,
    },
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // refresh 수행
      if (error.response.status === 401 && refreshTokenStorage.get()) {
        return axios
          .post(`${BASE_URL}/api/token/refresh`, {
            refreshToken: refreshTokenStorage.get(),
          })
          .then((res) => {
            accessTokenStorage.set(res.data.accessToken);
            refreshTokenStorage.set(res.data.refreshToken);
            error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
            return axios.request(error.config);
          })
          .catch((error) => {
            accessTokenStorage.set();
            refreshTokenStorage.set();
            alert("로그인이 필요합니다.");
            return Promise.reject(error);
          });
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export const BASE_URL = "https://aeatbe.jeje.work";
export const fetchInstance = (config?: AxiosRequestConfig) => {
  return initInstance({
    baseURL: BASE_URL,
    ...config,
  });
};

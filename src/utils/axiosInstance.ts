import axios, { AxiosRequestConfig } from "axios";

import { accessTokenStorage, refreshTokenStorage } from "./storage";

const initInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessTokenStorage.get()}`,
      ...config.headers,
    },
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401 || !accessTokenStorage.get()) {
        if (refreshTokenStorage.get()) {
          // refresh 수행
          return axios
            .post(`${BASE_URL}/api/token/refresh`, {
              refreshToken: refreshTokenStorage.get(),
            })
            .then((res) => {
              accessTokenStorage.set(res.data.accessToken);
              refreshTokenStorage.set(res.data.refreshToken);
              error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
            })
            .catch(() => {
              handleNotAuth();
            });
        } else {
          handleNotAuth();
        }
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

const handleNotAuth = () => {
  accessTokenStorage.set();
  refreshTokenStorage.set();
  alert("로그인이 필요합니다.");
};

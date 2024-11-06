import axios, { AxiosRequestConfig } from "axios";

import { authLocalStorage } from "./storage";

const initInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authLocalStorage.get() ?? ""}`,
      ...config.headers,
    },
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // TODO token 만료 오류일 경우 refresh 로직

      return Promise.reject(error);
    },
  );
  return instance;
};

export const BASE_URL = "https://aeatbe.jeje.work";
export const fetchInstance = () => {
  return initInstance({
    baseURL: BASE_URL,
  });
};

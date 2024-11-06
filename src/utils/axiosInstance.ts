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
  return instance;
};

export const BASE_URL = "https://aeatbe.jeje.work";
export const fetchInstance = () => {
  return initInstance({
    baseURL: BASE_URL,
  });
};

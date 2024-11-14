import axios, { AxiosRequestConfig } from "axios";

import { accessTokenStorage, refreshTokenStorage } from "./storage";

const initInstance = (config: AxiosRequestConfig, authContained: boolean) => {
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
  instance.interceptors.request.use((config) => {
    if (authContained && !accessTokenStorage.get()) {
      return handleNotAuth();
    }
    return config;
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
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
              return Promise.reject(error);
            })
            .catch(() => {
              return handleNotAuth();
            });
        } else {
          return handleNotAuth();
        }
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

/**
 * authContained = true 시,
 * catch err로 간 err가 인증정보가 없을 때 발생한 에러인가?
 * @param err
 * @returns 인증정보가 없을 때 발생한 에러인가?
 */
export const isAuthFail = (err: unknown) => !axios.isAxiosError(err);

export const BASE_URL = "https://aeatbe.jeje.work";
/**
 * @param config 추가 헤더 config
 * @param authContained 요청에 인증정보가 필요한가? (인증정보 없으면 로그인이 필요합니다 출력)
 * @returns
 */
export const fetchInstance = (authContained?: boolean, config?: AxiosRequestConfig) => {
  return initInstance(
    {
      baseURL: BASE_URL,
      ...config,
    },
    authContained ?? false,
  );
};

const handleNotAuth = () => {
  accessTokenStorage.set();
  refreshTokenStorage.set();
  alert("로그인이 필요합니다.");
  return Promise.reject("empty auth");
};

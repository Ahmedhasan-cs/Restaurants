import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { mockResponses } from "./mockResponses";

// Toggle this to enable mock responses
export const USE_MOCK = false;

const BASE_URL = "https://raisin-coding-challenge.glitch.me/api/v1";

const API_ENDPOINTS = {
  login: "/login",
  cuisines: "/cuisines",
};

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiManager = {
  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    if (USE_MOCK && mockResponses[url]) {
      return new Promise<T>((resolve) =>
        setTimeout(() => resolve(mockResponses[url]), 1000)
      );
    }
    const response: AxiosResponse<T> = await apiClient.post(url, data, config);
    return response.data;
  },
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    console.log("GET", url);
    if (USE_MOCK && mockResponses[url]) {
      return new Promise<T>((resolve) =>
        setTimeout(() => resolve(mockResponses[url]), 1000)
      );
    }
    const response: AxiosResponse<T> = await apiClient.get(url, config)
    return response.data;
  },
};

export { apiManager, API_ENDPOINTS };
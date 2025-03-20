import { API_ENDPOINTS } from "./apiManager";
import { cuisinesData } from "./mocks/cuisines";

// Mock responses
export const mockResponses: Record<string, any> = {
  [API_ENDPOINTS.login]: {
    message: "You are now authorised",
    userId: 2,
  },
  [API_ENDPOINTS.cuisines]: {
    ...cuisinesData
  }
};
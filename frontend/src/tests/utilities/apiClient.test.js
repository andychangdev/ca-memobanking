import { test, expect, vi } from "vitest";
import api from "../../utilities/apiClient";

const localStorageMock = {
  getItem: vi.fn(),
};

global.localStorage = localStorageMock;

test("API instance configuration", () => {
  expect(api.defaults.baseURL).toBe("https://ca-memobanking.onrender.com");

  expect(api.defaults.timeout).toBe(5000);

  expect(api.defaults.headers["Content-Type"]).toBe("application/json");
});

test("request interceptor adds Authorization header when user has token in local storage", () => {
  const token = "mocktoken";
  localStorageMock.getItem.mockReturnValue(token);

  const request = {
    headers: {},
  };

  api.interceptors.request.handlers[0].fulfilled(request);

  expect(request.headers.Authorization).toBe(`Bearer ${token}`);
});

test("request interceptor does not add Authorization header when user does not have token in local storage", () => {
  localStorageMock.getItem.mockReturnValue(null);

  const request = {
    headers: {},
  };

  api.interceptors.request.handlers[0].fulfilled(request);

  expect(request.headers.Authorization).toBeUndefined();
});

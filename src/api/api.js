import axios from "axios";

const trimTrailingSlash = (value = "") => value.replace(/\/+$/, "");

const trimSurroundingSlashes = (value = "") => value.replace(/^\/+|\/+$/g, "");

const getPublicPath = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  if (!publicUrl) {
    return "";
  }

  try {
    return new URL(publicUrl).pathname;
  } catch {
    return publicUrl;
  }
};

const resolveApiBaseUrl = () => {
  const configuredUrl = trimTrailingSlash(process.env.REACT_APP_API_URL || "");

  if (configuredUrl) {
    return configuredUrl;
  }

  if (typeof window === "undefined") {
    return "/adminpanel/api/v1";
  }

  const publicPath = trimSurroundingSlashes(getPublicPath());
  const appPrefix = publicPath ? `/${publicPath}` : "";
  const isLocalHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
  const origin = isLocalHost
    ? `${window.location.protocol}//${window.location.hostname}`
    : window.location.origin;

  return `${origin}${appPrefix}/adminpanel/api/v1`;
};

const API = axios.create({
  baseURL: resolveApiBaseUrl(),
});

API.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  const basicAuth = `Basic ` + btoa(`${process.env.REACT_APP_API_USER}:${process.env.REACT_APP_API_KEY}`);
  request.headers.authorization = basicAuth;
  if (token) {
    request.headers.token = `Bearer ${token}`;
  }
  return request;
});

API.interceptors.response.use((response) => {
  return response;
});

export default API;

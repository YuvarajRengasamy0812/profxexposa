import axios from "axios";
import { API_KEY, API_URL, API_USER } from "./config";

const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  const basicAuth = `Basic ` + btoa(`${API_USER}:${API_KEY}`);
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

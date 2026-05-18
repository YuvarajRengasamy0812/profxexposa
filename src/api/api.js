import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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

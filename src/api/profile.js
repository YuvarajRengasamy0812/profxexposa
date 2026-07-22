import API from "./api";
import { ClientPassword, ClientProfile } from "./endpoints";

export const updateClientProfile = (payload) => {
  payload.append("api_key", process.env.REACT_APP_API_KEY);
  return API.post(ClientProfile, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateClientPassword = (payload) => {
  return API.post(ClientPassword, {
    ...payload,
    api_key: process.env.REACT_APP_API_KEY,
  });
};
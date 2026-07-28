import API from "./api";
import { ClientBooths, Floorplan, FloorplanList } from "./endpoints";

export const getFloorplanList = (params = {}) => {
  return API.get(FloorplanList, { params });
};

export const getClientBooths = (email) => {
  return API.get(ClientBooths, {
    params: {
      email,
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

export const postFloorplan = (payload) => {
  return API.post(Floorplan, payload);
};

export const updateBoothCompanyProfile = (boothId, payload) => {
  payload.append("api_key", process.env.REACT_APP_API_KEY);
  return API.post(`${ClientBooths}/${boothId}`, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
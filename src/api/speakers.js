import API from "./api";
import { ClientSpeakers, Speakers } from "./endpoints";

export const getAllSpeakers = () => {
  return API.get(Speakers);
};

export const getClientSpeakers = (email) => {
  return API.get(ClientSpeakers, {
    params: {
      email,
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

export const submitClientSpeaker = (payload) => {
  payload.append("api_key", process.env.REACT_APP_API_KEY);
  return API.post(ClientSpeakers, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateClientSpeaker = (speakerId, payload) => {
  payload.append("api_key", process.env.REACT_APP_API_KEY);
  return API.post(`${ClientSpeakers}/${speakerId}`, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteClientSpeaker = (speakerId, email) => {
  return API.delete(`${ClientSpeakers}/${speakerId}`, {
    params: {
      email,
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

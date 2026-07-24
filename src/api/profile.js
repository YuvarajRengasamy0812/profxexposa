import API from "./api";
import { ClientAwardNominations, ClientLeagueReferrals, ClientPassword, ClientProfile } from "./endpoints";

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
export const getClientAwardNominations = ({ email, userId }) => {
  return API.get(ClientAwardNominations, {
    params: {
      email,
      user_id: userId,
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

export const getClientLeagueReferrals = ({ email, userId }) => {
  return API.get(ClientLeagueReferrals, {
    params: {
      email,
      user_id: userId,
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

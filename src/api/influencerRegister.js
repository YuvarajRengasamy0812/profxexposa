import API from "./api";
import {
  ApprovedInfluencers,
  InfluencerLogin,
  InfluencerPassword,
  InfluencerProfile,
  InfluencerReferrals,
  InfluencerRegister,
} from "./endpoints";

export const postInfluencerRegister = (payload) => {
  payload.append("api_key", process.env.REACT_APP_API_KEY);
  return API.post(InfluencerRegister, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const postInfluencerLogin = (payload) => {
  return API.post(InfluencerLogin, {
    ...payload,
    api_key: process.env.REACT_APP_API_KEY,
  });
};

export const getApprovedInfluencers = () => {
  return API.get(ApprovedInfluencers);
};

export const getInfluencerProfile = ({ email, userId }) => {
  return API.get(InfluencerProfile, {
    params: {
      email,
      user_id: userId,
      influencer_id: userId,
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

export const getInfluencerReferrals = ({ email, userId }) => {
  return API.get(InfluencerReferrals, {
    params: {
      email,
      user_id: userId,
      influencer_id: userId,
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
};

export const updateInfluencerPassword = (payload) => {
  return API.post(InfluencerPassword, {
    ...payload,
    api_key: process.env.REACT_APP_API_KEY,
  });
};

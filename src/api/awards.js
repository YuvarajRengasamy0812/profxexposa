import API from "./api";
import { AwardNominations } from "./endpoints";

export const submitAwardNomination = (payload) => {
  return API.post(AwardNominations, {
    ...payload,
    api_key: process.env.REACT_APP_API_KEY,
  });
};

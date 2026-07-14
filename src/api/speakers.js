import API from "./api";
import { Speakers } from "./endpoints";

export const getAllSpeakers = () => {
  return API.get(Speakers);
};
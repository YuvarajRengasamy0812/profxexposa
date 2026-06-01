import API from "./api";
import { LeagueBooking } from "./endpoints";

export const postLeagueBooking = (payload) => {
  return API.post(LeagueBooking, payload);
};

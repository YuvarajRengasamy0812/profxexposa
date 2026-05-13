import API from "./api";
import { BookingForm } from "./endpoints";

/**
 * Sends booking form data to the backend.
 * @param {Object} payload - The form data including api_key
 * @returns {Promise} Axios POST promise
 */
export const postBookingForm = (payload) => {
  return API.post(BookingForm, payload);
};

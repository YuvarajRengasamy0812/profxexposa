import API from "./api";
import { contactform } from "./endpoints";

/**
 * Sends contact form data to the backend.
 * @param {Object} payload - The form data including api_key
 * @returns {Promise} Axios POST promise
 */
export const postContactForm = (payload) => {
  return API.post(contactform, payload);
};

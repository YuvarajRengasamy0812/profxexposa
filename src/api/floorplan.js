import API from "./api";
import { Floorplan } from "./endpoints";

/**
 * Sends booking form data to the backend.
 * @param {Object} payload - The form data including api_key
 * @returns {Promise} Axios POST promise
 */
export const postFloorplan = (payload) => {
  return API.post(Floorplan, payload);
};

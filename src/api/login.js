import API from "./api";
import { Login} from "./endpoints";

/**
 * Sends contact form data to the backend.
 * @param {Object} payload - The form data including api_key
 * @returns {Promise} Axios POST promise
 */
export const LoginForm = (payload) => {
  return API.post(Login, payload);
};

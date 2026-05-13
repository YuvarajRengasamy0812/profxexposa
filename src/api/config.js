const sanitizeValue = (value = "") => value.trim();

const stripTrailingSlashes = (value = "") => value.replace(/\/+$/, "");

export const API_URL = stripTrailingSlashes(
  sanitizeValue(process.env.REACT_APP_API_URL || "")
);

export const API_KEY = sanitizeValue(process.env.REACT_APP_API_KEY || "");
export const API_USER = sanitizeValue(process.env.REACT_APP_API_USER || "");

const publicUrl = sanitizeValue(process.env.PUBLIC_URL || "");
const normalizedPublicUrl = publicUrl === "/" ? "" : stripTrailingSlashes(publicUrl);

export const APP_BASENAME =
  process.env.NODE_ENV === "production" && normalizedPublicUrl
    ? normalizedPublicUrl
    : "/";

export const getApiUrl = (path = "") => {
  const normalizedPath = String(path).replace(/^\/+/, "");
  return normalizedPath ? `${API_URL}/${normalizedPath}` : API_URL;
};

import API_BASE from "./apiBase";

AUTH_API_BASE = API_BASE + "/auth";

const authenticationApi = {
  LOGIN_API: AUTH_API_BASE + "/v1/login",
  SIGNUP_API: AUTH_API_BASE + "/v1/signup",
};

export default authenticationApi;

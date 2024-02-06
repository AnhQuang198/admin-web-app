import Config from "../config";
export const OAUTH2_REDIRECT_URI = "http://127.0.0.1:3000/oauth2/redirect";

//social login url
//--GOOGLE
export const GOOGLE_AUTH_URL = Config.apiUrl + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
//--FACEBOOK
export const FACEBOOK_AUTH_URL = Config.apiUrl + "/oauth2/authorize/facebook?redirect_uri=" + OAUTH2_REDIRECT_URI;
//--GITHUB
export const GITHUB_AUTH_URL = Config.apiUrl + "/oauth2/authorize/github?redirect_uri=" + OAUTH2_REDIRECT_URI;

const TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER_EXPIRE_TIME = "user_expire_time";
const TOKEN_TYPE = "token_type";
const DEFAULT_LOCALE = "default_locale";

export const saveTokenAuth = (token: string, refreshToken: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export const isLogout = () => {
  localStorage.clear();
}

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};

export const setTokenType = (tokenType: string) => {
  localStorage.setItem(TOKEN_TYPE, tokenType);
}

export const setTimeExpire = (time: any) => {
  localStorage.setItem(USER_EXPIRE_TIME, time);
}

export const getTokenType = () => {
  return localStorage.getItem(TOKEN_TYPE);
}

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEY);
}

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export const getDefaultLocale = () => {
  return localStorage.getItem(DEFAULT_LOCALE) ? localStorage.getItem(DEFAULT_LOCALE) : Config.defaultLocale;
}
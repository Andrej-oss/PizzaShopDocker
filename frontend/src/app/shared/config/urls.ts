import {environment} from '../../../environments/environment';

const API = environment.APIv1;
const authURL = `${API}/auth`;
const refreshTokenURL = `${authURL}/refresh`;
const registerURL = `${authURL}/register`;
const usersURL = `${API}/users`;

export const URL = {
  authURL,
  registerURL,
  usersURL,
  refreshTokenURL
};

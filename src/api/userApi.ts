import { authGET } from './apiRequest';
const apiPrefix = "/v1/users";

const userApi = {
  me: () => {
    let url = apiPrefix + "/me";
    return authGET(url);
  }
};

export default userApi;
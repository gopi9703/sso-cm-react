/* eslint-disable no-undef */
import { IUser } from "types/user.type";
import api from "./ApiService";
import TokenService from "./TokenService";

const checkUserExistViaEmail = (email: string) => {
  return api
    .get<IUser>(
      process.env.REACT_APP_API_BASE_URL + "/users/login?email=" + email
    )
    .then((response: any) => {
      if (response) {
        TokenService.setUser(response);
      }
      return response.data;
    });
};

const AuthService = {
  checkUserExistViaEmail,
};
export default AuthService;

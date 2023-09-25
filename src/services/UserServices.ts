/* eslint-disable no-undef */
import api from "./ApiService";

const getUsersList = () => {
  return api
    .get(process.env.REACT_APP_API_BASE_URL + `/users`)
    .then((response: any) => {
      return response;
    });
};

const UserService = {
  getUsersList,
};
export default UserService;

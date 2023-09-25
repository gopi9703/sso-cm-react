/* eslint-disable no-undef */
import api from "./ApiService";

const getRoles = () => {
  return api
    .get(process.env.REACT_APP_API_BASE_URL + `/roles`)
    .then((response: any) => {
      return response;
    });
};

const RolesService = {
  getRoles,
};
export default RolesService;

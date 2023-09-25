class TokenService {
  getLocalAccessToken() {
    const userTorken = JSON.parse(
      localStorage.getItem("CMLoggedInUser") || "{}"
    );
    return userTorken?.token;
  }

  setUser(userObj: object) {
    localStorage.setItem("CMLoggedInUser", JSON.stringify(userObj));
  }

  removeUser() {
    localStorage.removeItem("CMLoggedInUser");
  }
  clearLocalAccessToken() {
    localStorage.clear();
  }
  getLoggedInUserType() {
    const userTorken = JSON.parse(
      localStorage.getItem("CMLoggedInUser") || "{}"
    );
    return userTorken?.data?.isSuperAdmin;
  }
  // getLoggedInUserName() {
  //   const userTorken = JSON.parse(
  //     localStorage.getItem("CMLoggedInUser") || "{}"
  //   );
  //   return userTorken?.data?.firstName + " " + userTorken?.data?.lastName;
  // }
}

export default new TokenService();

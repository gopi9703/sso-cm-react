const CLIENT_ID = "0oa1u8iecpmLVVEMy0h8";
const ISSUER = "https://crossmark.oktapreview.com";
// const OKTA_TESTING_DISABLEHTTPSCHECK =
//   process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `http://localhost:3000/login/callback`;

// eslint-disable-next-line
export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email"],
    // pkce: true,
    // disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: "http://localhost:8000/api/messages",
  },
};

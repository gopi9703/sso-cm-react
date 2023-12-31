import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";
import { Button, Header } from "semantic-ui-react";
import AuthService from "services/AuthService";
import TokenService from "services/TokenService";

const Home = () => {
  const { authState, oktaAuth }: any = useOktaAuth();
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info: any) => {
        setUserInfo(info);
        const isAuthenticated =
          !authState || !authState.isAuthenticated
            ? null
            : authState.idToken.claims;

        AuthService.checkUserExistViaEmail(
          isAuthenticated?.preferred_username.toLowerCase()
        ).then(
          (_response) => {
            TokenService.setUser(_response);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  if (!authState) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Header as="h1"> Login Page</Header>

        {authState.isAuthenticated && !userInfo && (
          <div>Loading user information...</div>
        )}

        {/* {authState.isAuthenticated && userInfo && (
          <div>
            <p>
              Welcome back,&nbsp;
              {userInfo.name}!
            </p>
            <p>
              You have successfully authenticated against your Okta org, and
              have been redirected back to this application. You now have an ID
              token and access token in local storage. Visit the{" "}
              <a href="/profile">My Profile</a> page to take a look inside the
              ID token.
            </p>
            <h3>Next Steps</h3>
            <p>
              Currently this application is a stand-alone front end application.
              At this point you can use the access token to authenticate
              yourself against resource servers that you control.
            </p>
            <p>
              This sample is designed to work with one of our resource server
              examples. To see access token authentication in action, please
              download one of these resource server examples:
            </p>
            <ul>
              {resourceServerExamples.map((example) => (
                <li key={example.url}>
                  <a href={example.url}>{example.label}</a>
                </li>
              ))}
            </ul>
            <p>
              Once you have downloaded and started the example resource server,
              you can visit the <a href="/messages">My Messages</a> page to see
              the authentication process in action.
            </p>
          </div>
        )} */}

        {!authState.isAuthenticated && (
          <div>
            <p>
              When you click the login button below, you will be redirected to
              the login page . After you authenticate, you will be returned to
              this application with an ID token and access token. These tokens
              will be stored in local storage and can be retrieved at a later
              time.
            </p>
            <Button id="login-button" primary onClick={login}>
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;

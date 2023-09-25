import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";
import { Container, Image, Menu } from "semantic-ui-react";
import TokenService from "services/TokenService";

const Navbar = () => {
  const { authState, oktaAuth }: any = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect();
  const logout = async () => {
    oktaAuth.signOut();
    TokenService.removeUser();
  };

  if (!authState) {
    return null;
  }

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Image size="mini" src="/react.svg" />
            &nbsp;
            <Link to="/">Crossmark Okta-Sign In</Link>
          </Menu.Item>

          {authState.isAuthenticated && (
            <Menu.Item id="profile-button">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="profile-button">
              <Link to="/users">Users</Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="profile-button">
              <Link to="/roles">Roles</Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="logout-button" onClick={logout}>
              Logout
            </Menu.Item>
          )}
          {!authState && !authState.isAuthenticated && (
            <Menu.Item onClick={login}>Login</Menu.Item>
          )}
        </Container>
      </Menu>
    </div>
  );
};
export default Navbar;

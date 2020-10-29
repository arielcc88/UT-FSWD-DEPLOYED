// *****************************************************************************
// Auth0 Provider with access to browsing history
// uses history hook from react router
// ******************************************************************************
import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
//importing config file for auth0 app identification
const config = require("../config/config-react.json");

const Auth0ProviderWithHistory = ({ children }) => {
  // Auth0 app credentials  
  const domain = config.REACT_APP_AUTH0_DOMAIN;
  const clientId = config.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  // redirects user to the route they intended to access before authenticating
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
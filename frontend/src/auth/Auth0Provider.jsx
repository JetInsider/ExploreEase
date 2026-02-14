import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWrapper = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN || 'your-domain.auth0.com';
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || 'your-client-id';
  const redirectUri = window.location.origin;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri
      }}
    >
      {children}
    </Auth0Provider>
  );
};
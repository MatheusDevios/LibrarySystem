export const oktaConfig = {
  issuer: `https://dev-31359323.okta.com/oauth2/default`,
  clientId: `0oa8uekp1acGkC4xO5d7`,
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
  useClassicEngine: true,
};

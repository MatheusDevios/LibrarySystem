const oktaConfig = {
  clientId: `0oa8uekp1acGkC4xO5d7`,
  issuer: `https://dev-31359323.okta.com/oauth2/default`,
  redirectUri: `https://localhost:3000/login/callback`,
  scopes: ["openid", "profile", "email"],
};

export { oktaConfig };

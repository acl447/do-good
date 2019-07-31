export const AUTH_CONFIG = {
    domain: "dev-pxmy-apu.auth0.com",
    roleUrl: "https://rbac-tutorial-app/role",
    clientId: "RN62vTBzxepy9rsUgNVoAJnM5BILrOIf",
    callbackUrl: process.env.HEROKU_CALLBACK || "http://localhost:3000/callback"
  };
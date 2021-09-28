const config = require("config");
const querystring = require("querystring");

function getGoogleAuthUrl() {
  const options = {
    redirect_uri: `${config.get("serverRootUri")}/${config.get(
      "googleAuth.redirectUri"
    )}`,
    client_id: config.get("googleAuth.googleClientId"),
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };
  return `${config.get("googleAuth.rootUrl")}?${querystring.stringify(
    options
  )}`;
}

module.exports = { getGoogleAuthUrl };

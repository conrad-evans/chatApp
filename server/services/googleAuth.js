const config = require("config");
const querystring = require("querystring");
const axios = require("axios");

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

async function getTokens({ code, clientId, clientSecret, redirectUri }) {
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };

  try {
    const response = await axios.post(url, querystring.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}

module.exports = { getGoogleAuthUrl, getTokens };

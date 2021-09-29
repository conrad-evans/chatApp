const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const { getGoogleAuthUrl, getTokens } = require("../services/googleAuth");

router = express.Router();

router.get("/google/url", (req, res) => {
  const googleAuthUrl = getGoogleAuthUrl();

  return res.send(googleAuthUrl);
});

router.get("/me", (req, res) => {
  const decoded = req.cookies;
  // const decoded = jwt.verify(
  // req.cookies[config.get("cookieName")],
  // config.get("jwtSecret")
  // );

  console.log("decoded", decoded);

  return res.send(decoded);
});

router.get("/google", async (req, res) => {
  const code = req.query.code;

  try {
    const response = await getTokens({
      code,
      clientId: config.get("googleAuth.googleClientId"),
      clientSecret: config.get("googleAuth.googleClientSecret"),
      redirectUri: `${config.get("serverRootUri")}/${config.get(
        "googleAuth.redirectUri"
      )}`,
    });
    const { id_token, access_token } = response.data;

    const googleUser = await axios.get(
      `${config.get("googleAuth.tokenUri")}${access_token}`,
      {
        headers: { Authorization: `Bearer ${id_token}` },
      }
    );

    const token = await jwt.sign(googleUser.data, config.get("jwtSecret"));

    res.cookie(config.get("cookieName"), token, {
      maxAge: 900000,
      httpOnly: true,
      secure: false,
    });

    return res.redirect(config.get("uiRootUri"));
  } catch (error) {
    console.log(error.message);
    return res.send(error.message);
  }
});

module.exports = router;

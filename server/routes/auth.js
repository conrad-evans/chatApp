const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const { getGoogleAuthUrl, getTokens } = require("../services/googleAuth");
const { saveUser } = require("../models/user");

router = express.Router();

router.get("/google/url", (req, res) => {
  const googleAuthUrl = getGoogleAuthUrl();

  return res.send(googleAuthUrl);
});

router.get("/me", (req, res) => {
  const authCookie = req.cookies[config.get("cookieName")];

  if (!authCookie) {
    return;
  }

  const decoded = jwt.verify(authCookie, config.get("jwtSecret"));

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

    let userDetails = {
      google_id: googleUser.data.id,
      email: googleUser.data.email,
      verified_email: googleUser.data.verified,
      name: googleUser.data.name,
      given_name: googleUser.data.given_name,
      family_name: googleUser.data.family_name,
      picture: googleUser.data.picture,
      locale: googleUser.data.picture,
    };

    const userSaved = await saveUser(userDetails);

    if (!userSaved) {
      return res.status(500).send("Something went Wrong");
    }

    const token = await jwt.sign(
      googleUser.data.email,
      config.get("jwtSecret")
    );

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

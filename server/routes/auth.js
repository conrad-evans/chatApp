const express = require("express");
const { getGoogleAuthUrl } = require("../services/googleAuth");

router = express.Router();

router.get("/google/url", (req, res) => {
  googleAuthUrl = getGoogleAuthUrl();
  return res.send(googleAuthUrl);
});

module.exports = router;

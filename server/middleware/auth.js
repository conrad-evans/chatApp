const jwt = require("jsonwebtoken");
const config = require("config");

async function authMiddleware(req, res, next) {
  const token = req.cookies[config.get("cookieName")];

  if (!token) {
    return res
      .status(401)
      .send({ errors: [{ msg: "No token, authorization denied" }] });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.email;

    next();
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "Invalid Token, authorization denied" }] });
  }
}

module.exports = authMiddleware;

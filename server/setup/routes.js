const express = require("express");
const config = require("config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("../routes/auth");
const contactRouter = require("../routes/contacts");

function setUpRoutes(app) {
  app.use(express.json());
  app.use(
    cors({
      origin: config.get("uiRootUri"),
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use("/auth/contacts", contactRouter);
  app.use("/auth", authRouter);
}

module.exports = setUpRoutes;

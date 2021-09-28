const express = require("express");
const authRouter = require("../routes/auth");

function setUpRoutes(app) {
  app.use(express.json());
  app.use("/api/v1/auth", authRouter);
}

module.exports = setUpRoutes;

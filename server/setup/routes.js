const express = require("express");
const cors = require("cors");
const authRouter = require("../routes/auth");

function setUpRoutes(app) {
  app.use(express.json());
  app.use(cors());
  app.use("/auth", authRouter);
}

module.exports = setUpRoutes;

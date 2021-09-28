const express = require("express");
const connectToDatabase = require("./setup/database");
const setUpRoutes = require("./setup/routes");

const app = express();

connectToDatabase("mongodb://localhost/chatApp");
setUpRoutes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port::${4000}`);
});

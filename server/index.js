const express = require("express");
const connectToDatabase = require("./setup/database");
const setUpRoutes = require("./setup/routes");

const app = express();

connectToDatabase("mongodb://mongo/chatApp");
setUpRoutes(app);

app.get("/", (req, res) => {
  console.log("server has received a request");
  res.json({ heading: "Hello World!" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port::${4000}`);
});

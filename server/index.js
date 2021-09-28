const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port::${4000}`);
});

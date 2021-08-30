const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const { body, validationResult } = require("express-validator");

const USERS = { jane: [], john: [] };

app.use(express.json());
app.use(cors());

app.post(
  "/createUser",
  [body("username").isLength({ min: 4, max: 10 })],
  (req, res) => {
    console.log(USERS);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username } = req.body;

    const user = getUser(username);

    if (user == null) {
      USERS[user] = [];
      return res.status(201).send(true);
    }
    return res.status(404).send(false);
  }
);

app.post(
  "/login",
  [body("username").isLength({ min: 4, max: 10 })],
  (req, res) => {
    console.log(USERS);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username } = req.body;

    const user = getUser(username);

    if (user != null) {
      return res.status(200).send(true);
    }
    return res.status(404).send(false);
  }
);

app.get("/me", [body("username").isLength({ min: 4, max: 10 })], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username } = req.body;

  const user = getUser(username);

  if (user == null) {
    USERS[user] = [];
    return res.status(201).send(true);
  }
  return res.status(404).send(false);
});

app.post(
  "/addContact",
  [body("username").isLength({ max: 10 }), body("currentUser")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, currentUser } = req.body;

    const user = getUser(username);

    if (user != null) {
      USERS[user].push(currentUser);
      return res.status(201).send(true);
    }
    return res.status(404).send(false);
  }
);

const getUser = (userName) => {
  const user = USERS[userName];
  if (user == undefined) return null;
  return user;
};

io.on("connection", (socket) => {
  console.log("a user is online");

  socket.on("message-sent", function (data) {
    const { to, from, message } = JSON.parse(data);

    const newData = { message };

    io.emit(to, JSON.stringify(data));

    // io.emit(from, JSON.stringify(newData));
    console.log("working");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

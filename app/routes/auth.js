const bcrypt = require("bcryptjs");
const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const USERS = {};

router.post(
  "/createUser",
  body("username").isLength({ min: 4, max: 20 }),
  body("password").isLength({ min: 8, max: 20 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(req.body);
      return res.status(400).json({ errors: errors.array()[0] });
    }

    const { username, password } = req.body;
    if (getUser(USERS, username) !== undefined) {
      const message = "User already exists";
      return res.status(404).send({ errors: { message } });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const data = { username, password: hashPassword, contacts: [] };
    saveUser(USERS, username, data);
    return res.status(201).send(data);
  }
);

router.post(
  "/login",
  body("username").isLength({ min: 1 }),
  body("password").isLength({ min: 1 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }

    const { username, password } = req.body;
    const user = getUser(USERS, username);
    if (user === undefined) {
      const message = "Incorrect Credentials";
      return res.status(404).send({ errors: { message } });
    }

    const passwordsMatch = bcrypt.compareSync(password, user.password);
    if (!passwordsMatch) {
      const message = "Incorrect Credentials";
      return res.status(404).send({ errors: { message } });
    }
    return res.status(200).send({});
  }
);

router.post(
  "/addContact",
  body("username").isLength({ min: 4, max: 20 }),
  body("contact").isLength({ min: 4, max: 20 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }

    const { username, contact } = req.body;
    const user = getUser(USERS, username);
    if (user === undefined || getUser(USERS, contact) === undefined) {
      const message = "User does not exist";
      return res.status(404).send({ errors: { message } });
    }

    console.log("here we are");

    if (getDataInArray(user.contacts, contact) === contact) {
      return res.status(200).send({});
    }

    addDataToArray(user.contacts, contact);
    return res.status(201).send({ contact });
  }
);

const getUser = (users, user) => {
  return users[user];
};

const saveUser = (users, user, data) => {
  return (users[user] = data);
};

const getDataInArray = (array, data) => {
  return array.find((value) => value === data);
};

const addDataToArray = (array, data) => {
  array.push(data);
};

module.exports = router;

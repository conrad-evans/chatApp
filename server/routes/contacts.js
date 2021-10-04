const express = require("express");
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/auth");
const { checkUserInDatabase, getUser } = require("../models/user");

const router = express.Router();

router.get("/contacts", authMiddleware, async (req, res) => {
  const currentUser = await getUser({ email: req.user });

  return res.send(currentUser.contacts);
});

router.post(
  "/contacts",
  authMiddleware,
  body("email", "Email is required").isEmail(),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
      return res.status(400).send({ errors: errors.array() });
    }

    try {
      const { email } = req.body;
      const user = await checkUserInDatabase(email);

      if (!user) {
        return res.status(404).send({ errors: "User not found" });
      }

      const currentUser = await getUser({ email: req.user });

      currentUser.contacts.push({
        email: user.email,
        picture: user.picture,
        name: user.name,
      });

      await currentUser.save();

      const { name } = user;

      return res.status(201).send({ email, name });
    } catch (error) {
      console.log(error.message);

      return res.status(500).send("Something went wrong on our end");
    }
  }
);

module.exports = router;

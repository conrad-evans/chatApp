const express = require("express");
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/auth");
const { checkUserInDatabase, getUser } = require("../models/user");

const router = express.Router();

router.post(
  "/contacts",
  authMiddleware,
  body("email", "Email is required").isEmail(),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { email } = req.body;

    try {
      const user = checkUserInDatabase(email);

      if (!user) {
        return res.status(404).send({ errors: "User not found" });
      }

      const email = req.user;        
      const currentUser = getUser({email})

      currentUser.contacts.push({email: user.email})

      await currentUser.save()

      

      const 
    } catch (error) {}

    //
  }
);

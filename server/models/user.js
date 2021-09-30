const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  google_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  verified_email: {
    type: Boolean,
    required: true,
  },
  name: {
    type: Boolean,
    required: true,
  },
  given_name: {
    type: String,
    required: true,
  },
  family_name: {
    type: String,
    required: true,
  },
  picture: {
    type: Boolean,
    required: true,
  },
  locale: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

async function saveUser(userDetails) {
  try {
    const user = new User(userDetails);

    await user.save();

    return true;
  } catch (error) {
    console.log(error.message);

    return false;
  }
}

module.exports = { saveUser };

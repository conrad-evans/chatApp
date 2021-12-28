const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dateSent: {
    type: Date,
    required: true,
  },
});

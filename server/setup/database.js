const mongoose = require("mongoose");

async function connectToDatabase(databaseUri) {
  try {
    await mongoose.connect(databaseUri);
    console.log("Connected to database");
  } catch (error) {
    console.log("Failed to connect to database");
    console.log("Error::", error.message);
    process.exit(1);
  }
}

module.exports = connectToDatabase;

const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  Name: {
    type: String,
  },
});

module.exports = mongoose.model("accessModel", loginSchema);

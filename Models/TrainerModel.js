const mongoose = require("mongoose");

const TrainersSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Age: {
    type: Number,
  },
  ContactNo: {
    type: Number,
  },
  JoiningDate: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Expertise: {
    type: String,
  },
  JoiningDate: {
    type: Date,
  },
});

module.exports = mongoose.model("TrainersModel", TrainersSchema);

const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const MembersSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Age: {
    type: Number,
  },
  BatchId: {
    type: ObjectId,
  },
  ContactNo: {
    type: Number,
  },
  Address: {
    type: String,
  },
  Gender: {
    type: String,
  },
  JoiningDate: {
    type: Date,
  },
  Date: {
    type: Number,
  },
});

module.exports = mongoose.model("MembersModel", MembersSchema);

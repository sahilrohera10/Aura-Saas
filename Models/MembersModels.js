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
  JoiningDate: {
    type: Date,
  },
  Gender: {
    type: String,
  },
  Fees: {
    type: [
      { jan: 0 },
      { Feb: 0 },
      { March: 0 },
      { April: 0 },
      { May: 0 },
      { June: 0 },
      { July: 0 },
      { August: 0 },
      { September: 0 },
      { October: 0 },
      { November: 0 },
      { December: 0 },
    ],
  },
});

module.exports = mongoose.model("MembersModel", MembersSchema);

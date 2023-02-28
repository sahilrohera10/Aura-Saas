const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const batchesSchema = new mongoose.Schema({
  BatchName: {
    type: String,
  },
  From: {
    type: String,
  },
  To: {
    type: String,
  },
  TrainerName: {
    type: String,
  },
  Date: {
    type: String,
  },
});

module.exports = mongoose.model("batchesModel", batchesSchema);

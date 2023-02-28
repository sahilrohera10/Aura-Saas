const { ObjectId } = require("mongodb");

const membersModel = require("../Models/MembersModels");

module.exports = {
  AddParticipant,
  GetAllParticipants,
  GetAllParticipantsBatchWise,
  GetUserDetails,
  UpdateParticipantDetails,
  AllJoiningsDateWise,
  deleteFromBatch,
};

async function AddParticipant(req, res) {
  console.log("date =>", req.body.JoiningDate);
  const date = req.body.JoiningDate;
  const n = date.split("T")[0].split("-")[2];
  console.log("n is =>", n);
  try {
    const Body = {
      Name: req.body.Name,
      Age: req.body.Age,
      BatchId: req.body.BatchId,
      ContactNo: req.body.ContactNo,
      Address: req.body.Address,
      Gender: req.body.Gender,
      JoiningDate: req.body.JoiningDate.split("T")[0],
      Date: date.split("T")[0].split("-")[2],
    };
    const Existparticipant = await membersModel.findOne({
      ContactNo: req.body.ContactNo,
      BatchId: req.body.BatchId,
    });
    if (Existparticipant) {
      return res.status(300).json("Already Joined this Batch");
    }

    const ParticipantDetails = await membersModel.create(Body);
    return res.status(200).json(ParticipantDetails);
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json(err);
  }
}

async function GetAllParticipants(req, res) {
  try {
    const List = await membersModel.find();
    return res.status(200).json(List);
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json(err);
  }
}

async function GetAllParticipantsBatchWise(req, res) {
  const id = ObjectId(req.params.BatchId);
  console.log("id=>", id);
  try {
    const List = await membersModel.find({ BatchId: id });
    return res.status(200).json(List);
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json(err);
  }
}

async function GetUserDetails(req, res) {
  const id = req.params.userId;
  try {
    const userDetails = await membersModel.findOne({ _id: id });
    return res.status(200).json(userDetails);
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json(err);
  }
}

async function UpdateParticipantDetails(req, res) {
  const body = req.body;

  try {
    await membersModel.findOneAndUpdate({ _id: body.userId }, body);
    return res.status(200).json("Participant details Updated");
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json(err);
  }
}

async function AllJoiningsDateWise(req, res) {
  const from = req.params.from;
  const to = req.params.to;

  try {
    const list = await membersModel.find({ Date: { $gte: from, $lte: to } });
    return res.status(200).json(list);
  } catch (error) {
    console.log("Error=>", error);
    return res.status(400).json(error);
  }
}
async function deleteFromBatch(req, res) {
  const id = req.params.id;

  try {
    const list = await membersModel.updateOne(
      { _id: id },
      { $unset: { BatchId: "" } }
    );
    return res.status(200).json({ msg: "deleted" });
  } catch (error) {
    console.log("Error=>", error);
    return res.status(400).json(error);
  }
}

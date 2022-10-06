const { ObjectId } = require("mongodb");

const membersModel = require("../Models/MembersModels");

module.exports = {
  AddParticipant,
  GetAllParticipants,
  GetAllParticipantsBatchWise,
  GetUserDetails,
UpdateParticipantDetails
};

async function AddParticipant(req, res) {
  try {
    const Existparticipant = await membersModel.findOne({
      ContactNo: req.body.ContactNo,
      BatchId: req.body.BatchId,
    });
    if (Existparticipant) {
      return res.status(300).json("Already Joined this Batch");
    }

    const ParticipantDetails = await membersModel.create(req.body);
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
  console.log("id=>",id);
  try {
    const List = await membersModel.find({ BatchId: id });
    return res.status(200).json(List);
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json(err);
  }
}

async function GetUserDetails(req,res){
  const id = req.params.userId;
    try{
const userDetails = await membersModel.findOne({_id:id});
return res.status(200).json(userDetails);


    }catch(err){
        console.log("Error=>", err);
    return res.status(400).json(err);
    }

}


async function UpdateParticipantDetails(req,res){
const body = req.body;

  try{
       await membersModel.findOneAndUpdate({_id:body.userId},body);
       return res.status(200).json("Participant details Updated");
  }catch(err){
    console.log("Error=>", err);
    return res.status(400).json(err);
  }

}
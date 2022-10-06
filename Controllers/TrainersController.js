const TrainersModel = require("../Models/TrainerModel");


module.exports = {
AddTrainer,
GetTrainers,
DeleteTrainer,
UpdateTrainerDetails
}


async function AddTrainer(req,res){

try{
     const ExistingTrainer = await TrainersModel.findOne({ContactNo:req.body.ContactNo});
     if(ExistingTrainer){
        return res.status(300).json("Already Registered");
     }
     const TrainerDetails = await TrainersModel.create(req.body);
     return res.status(200).json(TrainerDetails);


}catch(err){
    console.log("Error=>",err);
    return res.status(400).json(err);
}

}


async function GetTrainers(req,res){

  try{

    const TrainerList = await TrainersModel.find();
    return res.status(200).json(TrainerList);
     
  }catch(err){
    console.log("Error=>",err);
    return res.status(400).json(err);
  }

}


async function DeleteTrainer(req,res){
const id = req.params.TrainerId;
try{
   
    await TrainersModel.deleteOne({_id:id});
    return res.status(200).json("Trainer Deleted");
}
catch(err){
    console.log("Error=>",err);
    return res.status(400).json(err);
}
}


async function UpdateTrainerDetails(req,res){
const body = req.body;
  try{
    await TrainersModel.findOneAndUpdate({_id:body.id},body);
    return res.status(200).json("Trainer Details Updated");

  }catch(err){
    console.log("Error=>",err);
    return res.status(400).json(err);
  }

}
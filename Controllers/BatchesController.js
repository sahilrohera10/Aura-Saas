const batchesModel = require("../Models/BatchesModel");


module.exports = {
CreateBatch,
GetAllBatches,
DeleteBatch,
UpdateBatchDetails
}


async function CreateBatch(req,res){

try{

    const ExistingBatch =  await batchesModel.findOne({BatchName:req.body.BatchName});
    if(ExistingBatch){
        return res.status(300).json("Already a batch exists at this timing");
    }

    const batchDetail = await batchesModel.create(req.body);
    return res.status(200).json(batchDetail);

}catch(err){
    console.log("Error=>",err);
    return res.status(400).json(err);
}

}


async function GetAllBatches(req,res){

try{
 
    const Batches = await batchesModel.find();
    return res.status(200).json(Batches);
     
}catch(err){
    console.log("Error=>",err);
    return res.status(400).json(err);
}

}

async function DeleteBatch(req,res){
const BatchId = req.params.batchId;
try{
     await batchesModel.deleteOne({_id:BatchId});
     return res.status(200).json("Batch Deleted");  

}catch(err){
    console.log("Error=>",err);
    return res.status(400).json(err);
}

}


async function UpdateBatchDetails(req,res){
const id = req.body.id;
try{

  await batchesModel.findOneAndUpdate({_id:id},req.body);
  return res.status(200).json("Batch Details Updated");

}catch(err){
    console.log("Error=>",err);
    return res.status(400).json(err);
}

}
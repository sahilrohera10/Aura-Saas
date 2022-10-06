const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")


const batchesSchema =  new mongoose.Schema({

   BatchName:{
    type:String,
   },
   From:{
      type:String
   },
   To:{
      type:String
   },
   TrainerId:{
    type:ObjectId
   }
    
    })
    
    module.exports = mongoose.model("batchesModel", batchesSchema);
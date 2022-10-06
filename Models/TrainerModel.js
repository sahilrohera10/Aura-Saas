const mongoose = require("mongoose")


const TrainersSchema =  new mongoose.Schema({

   Name:{
    type:String,
   },
   Age:{
    type:Number
   },
   ContactNo:{
    type:Number
   },
   JoiningDate:{
    type:Date
   },
   Gender:{
    type:String
   },
   Expertise:{
    type:String
   }
    
    })
    
    module.exports = mongoose.model("TrainersModel", TrainersSchema);
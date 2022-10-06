const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")


const MembersSchema =  new mongoose.Schema({

   Name:{
    type:String,
   },
   Age:{
    type:Number
   },
   BatchId:{
    type:ObjectId
   },
   ContactNo:{
    type:Number
   },
   JoiningDate:{
    type:Date
   },
   Gender:{
    type:String
   }
    
    })
    
    module.exports = mongoose.model("MembersModel", MembersSchema);
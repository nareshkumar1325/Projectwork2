const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema({
    name:{
     type:String,
     require:true,
    },
    
     age:{
      type:String,
      require:true,
     },
     mentalhealthstatus:{
      type:String,
      require:true,
     },
     prescriptions:{
        type:String,
        require:true,
    },
    reference: {
        type:String,
        require:true,
     },
     image:{
        type:String
     }})
  
  
  
  module.exports=mongoose.model("patient",patientSchema)
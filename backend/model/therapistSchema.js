const mongoose=require("mongoose")

const therapistSchema=new mongoose.Schema({
    name:{
     type:String,
     require:true,
    },
    
     age:{
      type:String,
      require:true,
     },
     qualification:{
      type:String,
      require:true,
     },
     experience:{
        type:String,
        require:true,
    },
    about: {
        type:String,
        require:true,
     },
     email:{type:String,
     require:true
   },
     image:{
        type:String
     },
     status:{
      type:String,
      require:true,
      default:"pending"
     }

   })
  
  
  
  module.exports=mongoose.model("therapist",therapistSchema)
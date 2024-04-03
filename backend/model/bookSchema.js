const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
title:{
    type:String,
   require:true,
},
author:{
    type:String,
   require:true,
},
about:{
    type:String,
    require:true,
},
price:{
    type:String,
   require:true,
},
image:{
    type:String,
}})
module.exports=mongoose.model("book",bookSchema)
const mongoose=require("mongoose");
const schema=mongoose.Schema;

const catogorySchema=new schema({
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
    },       
    date: {
        type: Date,
        default: Date.now
      }
    
},{timestamps:true});

const CatogoryModel=mongoose.model("Catogory",catogorySchema);
module.exports=CatogoryModel;





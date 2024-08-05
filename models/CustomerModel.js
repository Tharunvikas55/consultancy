const mongoose=require("mongoose");
const schema=mongoose.Schema;

const customerSchema=new schema({
customerName:{
    type:String,
    required:true,
},
email:{
    type:String,
},
customerMobileNumber:{
    type:String,
    required:true,
},
doorNumber:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},
city:{
    type:String,
    required:true,
},
pincode:{
    type:String,
    required:true,
},
district:{
    type:String,
    required:true,
},
state:{
    type:String,
    required:true,
},
isAdmin:{
    type:Boolean,
    default:false
},
date: {
    type: Date,
    default: Date.now
  }
},{timestamps:true})

const CustomerModel=mongoose.model("customer",customerSchema);

module.exports=CustomerModel;
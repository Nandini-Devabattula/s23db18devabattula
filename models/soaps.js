const mongoose = require("mongoose");

const soapsSchema = mongoose.Schema({
  Soap_Name:  {type:String , required: true, minLength:[1,'itemname']},
  Soap_cost: { type: Number, required: true,min: 0, max: 600 },
  Soap_Color: {type:String,required: true,maxLength:[8,'color']}, 
});

module.exports = mongoose.model("soaps", soapsSchema);

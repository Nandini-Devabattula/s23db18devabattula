const mongoose = require("mongoose");

const soapsSchema = mongoose.Schema({
  Soap_Name:  String ,
  Soap_cost: { type: Number, min: 0, max: 600 },
  Soap_Color: String 
});

module.exports = mongoose.model("soaps", soapsSchema);

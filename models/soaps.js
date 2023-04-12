const mongoose = require("mongoose")
const soapsSchema = mongoose.Schema({
Soap_Name: String,
Soap_cost: Number,
Soap_Color:String
})
module.exports = mongoose.model("soaps",soapsSchema)